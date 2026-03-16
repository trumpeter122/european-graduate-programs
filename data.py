from __future__ import annotations

from datetime import date
from typing import Final

from models import ApplicationWindow, Program, Semester

TARGET_SEMESTER: Final = Semester(season="winter", starting_year="2026")

# English-taught or English-only-applicable Master programs applied from outside
# of the EU
# For fields like application windows, only information specific to that program
# is accepted
# Specializations marked explicitly as German-only are ignored
PROGRAMS: Final[list[Program]] = [
    Program(
        name="Computer Science",
        university_name="University of Stuttgart",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2025, 11, 15),
                to_date=date(2026, 1, 15),
            )
        ],
        specializations=[
            "Autonomous Systems in Computer Science",
            "Service Technology and Engineering",
            "Visual Computing",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="Technical University of Hamburg",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 6, 1),
                to_date=date(2026, 7, 15),
            )
        ],
        specializations=[
            "Computer and Software Engineering",
            "Intelligence Engineering",
            "Mathematics",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="University of Siegen",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 1, 1),
                to_date=date(2026, 4, 30),
            )
        ],
        specializations=[
            "Embedded Systems",
            "Visual Computing",
            "Complex and Intelligent Software Systems",
        ],
        application_status="working",
    ),
    Program(
        name="Computer Science",
        university_name="University of Bonn",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 15),
                to_date=date(2026, 5, 1),
            )
        ],
        specializations=[
            "Algorithmics",
            "Graphics/Vision/Audio",
            "Information and Communication Management",
            "Intelligent Systems",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="University of Hannover",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 15),
                to_date=date(2026, 5, 31),
            )
        ],
        specializations=[
            "Data Science",
            "Human Centered Computing",
            "Systems-oriented Computer Science",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="Karlsruhe Institute of Technology",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Not specified
                from_date=None,
                to_date=date(2026, 6, 15),
            )
        ],
        specializations=[
            "Algorithm Engineering",
            "Computer Graphics and Geometry Processing",
            "Data Science",
            "Design of Embedded Systems and Computer Architectures",
            "Human-centred Machine Intelligence",
            "Parallel Computing",
            "Robotics and Automation",
            "Software Engineering and Compiler Construction",
            "Telematics",
            "Theoretical Foundations",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="University of Regensburg",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Approximation for mid-April
                from_date=date(2026, 4, 15),
                to_date=date(2026, 6, 1),
            )
        ],
        specializations=[
            "Core Computer Science",
            "Bioinformatics",
            "Human-Centred Computing",
            "Information Systems",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="Ruhr University Bochum",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Approximation for the beginning of November
                from_date=date(2025, 11, 1),
                to_date=date(2025, 12, 15),
            )
        ],
        specializations=[
            "Artificial Intelligence",
            "Cybersecurity",
            "Quantum Computing",
            "Software Engineering",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="Paderborn University",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Not specified
                from_date=None,
                to_date=date(2026, 5, 31),
            )
        ],
        specializations=[
            "Classical and Quantum Algorithm Design",
            "Computer and Communication Systems",
            "Data Science and Intelligent Systems",
            "Security",
            "Software Engineering",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="University of Marburg",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 5, 1),
                # For non-NC
                to_date=date(2026, 6, 30),
            )
        ],
        specializations=[
            "Software Design",
            "Cloud Computing",
            "Graphics Programming",
            "Artificial Intelligence",
            "Model Checking",
            "Distributed Systems",
            "IT Security",
            "Databases",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="University of Freiburg",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 15),
                to_date=date(2026, 5, 31),
            )
        ],
        specializations=["Artificial Intelligence", "Cyber-Physical Systems"],
    ),
    Program(
        name="Computer Science International",
        university_name="University of Rostock",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 1),
                to_date=date(2026, 5, 31),
            )
        ],
        specializations=["Information Systems", "Complex Systems"],
    ),
    Program(
        name="Computer Science",
        university_name="University of Potsdam",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Not specified
                from_date=None,
                to_date=date(2026, 6, 1),
            )
        ],
        specializations=[
            "Data and AI",
            "Algorithms and Foundations",
            "Digital Health",
            "Security Engineering",
            "Systems",
        ],
    ),
    Program(
        name="Computer Science",
        university_name="Saarland University",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Not specified
                from_date=None,
                to_date=date(2026, 5, 15),
            )
        ],
        specializations=[
            "Multimedia Applications",
            "Distributed Information and Communications Systems",
            "Language Processing",
            "Image Processing",
            "Cryptography",
            "Program Analysis and Formal Methods",
        ],
    ),
    Program(
        name="Computer and Information Science",
        university_name="University of Konstanz",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 3, 18),
                to_date=date(2026, 4, 15),
            )
        ],
        specializations=[
            "Data science",
            "Visual computing",
            "Interactive systems",
            "Software and systems",
            "Algorithmics",
        ],
    ),
    Program(
        name="Applied Computer Science",
        university_name="University of Goettingen",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Approximation for mid-March
                from_date=date(2026, 3, 15),
                to_date=date(2026, 4, 15),
            )
        ],
        specializations=[
            "Applied System Engineering",
            "Bioinformatics",
            "Data Science",
            "Digital Humanities",
            "Geoinformatics",
            "Ecological Informatics",
            "Medical Informatics",
            "Computational Neuroscience",
            "Law and Computer Science",
            "Business Information Systems",
            "Scientific Computing",
        ],
    ),
    Program(
        name="Web and Data Science",
        university_name="University of Koblenz",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Not specified
                from_date=None,
                to_date=date(2026, 6, 15),
            )
        ],
        specializations=[
            "Web Science",
            "Network Theory and Dynamic Systems",
            "Engineering Web and Data-intensive Systems",
            "Data Science",
            "Machine Learning and Data Mining",
        ],
    ),
    Program(
        name="Software Systems Engineering",
        university_name="RWTH Aachen University",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2025, 12, 1),
                to_date=date(2026, 3, 1),
            )
        ],
        specializations=[
            "Theoretical Foundations of Software Systems Engineering",
            "Communication",
            "Data and Information Management",
            "Applied Computer Science",
            "Software Engineering",
        ],
    ),
    Program(
        name="International Software Systems Science",
        university_name="Bamberg University",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Approximation for mid-May
                from_date=date(2026, 5, 15),
                to_date=date(2026, 7, 15),
            )
        ],
        specializations=[
            "Distributed and Mobile Systems",
            "Software Analysis and Verification",
            "Service-oriented Architectures",
            "Communication Systems and Protocols",
        ],
    ),
    Program(
        name="Software Engineering",
        university_name="University of Hildesheim",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 15),
                to_date=date(2026, 6, 30),
            )
        ],
        specializations=[
            "Software Engineering",
            "Requirements Engineering for Quality",
            "Model-Based Software Engineering",
            "Software Architectures",
            "Advanced Web Development",
            "Software Product Line Engineering",
        ],
    ),
    Program(
        name="Web Engineering",
        university_name="Chemniz University of Technology",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 1),
                to_date=date(2026, 7, 15),
            )
        ],
        specializations=[
            "Databases",
            "Information Systems",
            "Software Engineering",
            "Internet and Web Technologies",
        ],
    ),
]
