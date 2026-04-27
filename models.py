from __future__ import annotations

from dataclasses import dataclass
from datetime import date, timedelta
from typing import Final, Literal, TypeGuard

AVAILABILITY_TYPES: Final[tuple[str, ...]] = (
    "closed",
    "not-opened",
    "opened",
    "not-closed",
)
type Availability = Literal["closed", "not-opened", "opened", "not-closed"]

COUNTRIES: Final[tuple[str, ...]] = ("Germany", "Italy")
type Country = Literal["Germany", "Italy"]

UNIASSIST_FEE = 30  # 75 EUR for first-time application

type Season = Literal["winter"]
type StartingYear = Literal["2026"]
type Material = object
type Source = object


def is_availability(value: str) -> TypeGuard[Availability]:
    return value in AVAILABILITY_TYPES


def is_country(value: str) -> TypeGuard[Country]:
    return value in COUNTRIES


@dataclass(frozen=True, slots=True)
class Semester:
    season: Season
    starting_year: StartingYear


@dataclass(frozen=True, slots=True)
class ApplicationWindow:
    semester: Semester
    from_date: date | None
    to_date: date


@dataclass(frozen=True, slots=True)
class Requirement:
    needed: bool
    qualified: bool


@dataclass(slots=True)
class Program:
    name: str
    university_name: str
    country: Country
    windows: list[ApplicationWindow]
    application_fee: int | None
    specializations: list[str] | None = None
    requirements: list[Requirement] | None = None
    materials: list[Material] | None = None
    sources: list[Source] | None = None

    def __post_init__(self) -> None:
        if self.specializations is not None:
            self.specializations = sorted(self.specializations)
        if any(
            len([w1.semester == w2.semester for w2 in self.windows]) > 1
            for w1 in self.windows
        ):
            raise Exception("More than 1 window found for 1 semester")

        for window in self.windows:
            if window.from_date is not None and window.from_date >= window.to_date:
                from_iso = window.from_date.isoformat()
                to_iso = window.to_date.isoformat()
                raise ValueError(f'"from" ({from_iso}) must be before "to" ({to_iso})')

    def _get_matching_window(self, semester: Semester) -> ApplicationWindow:
        for window in self.windows:
            if window.semester == semester:
                return window
        raise ValueError("No matching window found")

    def get_time_until_window_starts(self, semester: Semester) -> timedelta | None:
        matching_window = self._get_matching_window(semester)
        if matching_window.from_date is None:
            return None
        return matching_window.from_date - date.today()

    def get_time_until_window_ends(self, semester: Semester) -> timedelta:
        matching_window = self._get_matching_window(semester)
        return matching_window.to_date - date.today()

    def get_days_until_window_starts(self, semester: Semester) -> int | None:
        delta = self.get_time_until_window_starts(semester)
        if delta is None:
            return None
        return delta.days

    def get_days_until_window_ends(self, semester: Semester) -> int:
        return self.get_time_until_window_ends(semester).days

    def get_availability(self, semester: Semester) -> Availability:
        time_until_start = self.get_time_until_window_starts(semester)
        time_until_end = self.get_time_until_window_ends(semester)
        if time_until_end <= timedelta(0):
            return "closed"
        if time_until_start is None:
            return "not-closed"
        if time_until_start > timedelta(0):
            return "not-opened"
        return "opened"
