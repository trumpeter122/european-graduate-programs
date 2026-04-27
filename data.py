from __future__ import annotations

from datetime import date
from typing import Final

from models import UNIASSIST_FEE, ApplicationWindow, Program, Semester

TARGET_SEMESTER: Final = Semester(season="winter", starting_year="2026")

# English-taught or English-only-applicable 1st-year Master programs applied from
# outside of the EU with Visa requirement
# For fields like windows and application_fee, only information specific to that program
# is accepted, except when it is explicitly specified that the program follows general
# regulations for that field.
# Specializations marked explicitly as German-only are ignored
PROGRAMS: Final[list[Program]] = [
    Program(
        name="Computer Science",
        university_name="University of Stuttgart",
        country="Germany",
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
        application_fee=0,
    ),
    Program(
        name="Computer Science",
        university_name="Technical University of Hamburg",
        country="Germany",
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
        application_fee=0,
    ),
    Program(
        name="Computer Science",
        university_name="University of Siegen",
        country="Germany",
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
        application_fee=0,
    ),
    Program(
        name="Computer Science",
        university_name="University of Bonn",
        country="Germany",
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
        application_fee=0,
    ),
    Program(
        name="Computer Science",
        university_name="University of Hannover",
        country="Germany",
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
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Computer Science",
        university_name="Karlsruhe Institute of Technology",
        country="Germany",
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
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Computer Science",
        university_name="University of Regensburg",
        country="Germany",
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
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Computer Science",
        university_name="Ruhr University Bochum",
        country="Germany",
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
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Computer Science",
        university_name="Paderborn University",
        country="Germany",
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
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Computer Science",
        university_name="University of Marburg",
        country="Germany",
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
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Computer Science",
        university_name="University of Freiburg",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 15),
                to_date=date(2026, 5, 31),
            )
        ],
        specializations=["Artificial Intelligence", "Cyber-Physical Systems"],
        application_fee=0,
    ),
    Program(
        name="Computer Science International",
        university_name="University of Rostock",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 1),
                to_date=date(2026, 5, 31),
            )
        ],
        specializations=["Information Systems", "Complex Systems"],
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Computer Science",
        university_name="University of Potsdam",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 1),
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
        application_fee=0,
    ),
    Program(
        name="Computer Science",
        university_name="Saarland University",
        country="Germany",
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
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Computer and Information Science",
        university_name="University of Konstanz",
        country="Germany",
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
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Applied Computer Science",
        university_name="University of Goettingen",
        country="Germany",
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
        application_fee=0,
    ),
    Program(
        name="Web and Data Science",
        university_name="University of Koblenz",
        country="Germany",
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
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Software Systems Engineering",
        university_name="RWTH Aachen University",
        country="Germany",
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
        application_fee=0,
    ),
    Program(
        name="International Software Systems Science",
        university_name="Bamberg University",
        country="Germany",
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
        application_fee=0,
    ),
    Program(
        name="Software Engineering",
        university_name="University of Hildesheim",
        country="Germany",
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
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Web Engineering",
        university_name="Chemnitz University of Technology",
        country="Germany",
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
        application_fee=UNIASSIST_FEE,
    ),
    # Temporarily ignored
    # Program(
    #     name="Computer Science",
    #     university_name="Paris-Saclay University",
    #     windows=[
    #         ApplicationWindow(
    #             semester=TARGET_SEMESTER,
    #             # Not specified
    #             from_date=None,
    #             to_date=date(2026, 3, 16),
    #         )
    #     ],
    # ),
    Program(
        name="Cognitive Science",
        university_name="Ruhr University Bochum",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Approximation for the beginning of June
                from_date=date(2026, 6, 1),
                to_date=date(2026, 7, 15),
            )
        ],
        specializations=[
            "Mind and Language",
            "Brain and Behavior",
            "Computation and Artificial Intelligence",
        ],
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Cognitive Science",
        university_name="University of Osnabrueck",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 5, 7),
                to_date=date(2026, 6, 15),
            )
        ],
        specializations=[
            "Cognition: Artificial Intelligence and Machine Learning",
            "Cognition: Mind, Ethics, and Society",
            "Cognition: (Computational) Neuroscience",
            "Cognition: Psychology, Language, and Communication",
        ],
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Cognitive Science",
        university_name="Rhineland-Palatinate Technical University of "
        "Kaiserslautern-Landau",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 2, 23),
                to_date=date(2026, 4, 30),
            )
        ],
        specializations=[
            "Perception",
            "Cognition and Knowledge",
            "Language and Linguistics",
            "Cognitive Neuroscience",
            "Computation",
        ],
        application_fee=60,
    ),
    Program(
        name="Cognitive Science",
        university_name="University of Potsdam",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 1),
                to_date=date(2026, 6, 1),
            )
        ],
        specializations=[
            "First Language Acquisition",
            "Language Processing",
            "Evidence Bases for Language Disorders",
            "Cognitive Development",
            "Cognitive Neuroscience",
            "Cognition",
            "Cognitive Modeling",
            "Advanced Natural Language Processing",
        ],
        application_fee=0,
    ),
    Program(
        name="Cognitive Science",
        university_name="Technical University of Darmstadt",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2025, 12, 1),
                to_date=date(2026, 3, 1),
            )
        ],
        specializations=[
            "Cognitive Psychology",
            "Artificial Intelligence",
            "Perception and Action",
            "Higher Cognition",
            "Applied Cognitive Science",
        ],
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Cognitive Systems",
        university_name="University of Ulm",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 1),
                to_date=date(2026, 5, 15),
            )
        ],
        specializations=[
            "Perception",
            "Learning and Memory",
            "Planning and Reasoning",
            "Interaction",
            "Methods, General Concepts and Tools",
        ],
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Mind, Brain and Behavior",
        university_name="University of Giessen",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2025, 12, 1),
                to_date=date(2026, 6, 15),
            )
        ],
        specializations=[
            "Visual Perception of Color and Materials",
            "Perception and Action",
            "Visual Cognition and Object Perception",
            "Current Topics in Cognition and Development",
        ],
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Neural and Behavioural Sciences",
        university_name="University of Tuebingen",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Not specified
                from_date=None,
                to_date=date(2026, 3, 31),
            )
        ],
        specializations=[
            "Functional Neuroanatomy",
            "Computational Neuroscience",
            "Brain Imaging and Recording",
            "Motor and Sensory Systems Neuroscience",
            "Cognitive Neuroscience and Psychophysics",
            "Neurophysiology and Neuropsychology",
            "Learning and Memory",
        ],
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Neuroscience",
        university_name="University of Oldenburg",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 3, 15),
                to_date=date(2026, 4, 30),
            )
        ],
        specializations=[
            "Sensory Neuroscience",
            "Behavioural Neuroscience",
            "Computational Neuroscience",
        ],
        application_fee=UNIASSIST_FEE,
    ),
    Program(
        name="Neuroscience",
        university_name="University of Bremen",
        country="Germany",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 3, 1),
                to_date=date(2026, 4, 30),
            )
        ],
        specializations=[
            "Experimental Neuroscience",
            "Computational Neuroscience",
        ],
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Cognitive Science",
        university_name="University of Trento",
        country="Italy",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 2, 9),
                to_date=date(2026, 5, 29),
            )
        ],
        specializations=[
            "Cognitive Neuroscience",
            "Computational and Theoretical Modelling of Language and Cognition",
            "fundamental Behavioural Neuroscience",
        ],
        application_fee=30,
    ),
    Program(
        name="Computer Science",
        university_name="University of Bari Aldo Moro",
        country="Italy",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=None,
                # Approximation for the last assessment session held in February
                to_date=date(2026, 2, 28),
            )
        ],
        specializations=[
            "Artificial Intelligence",
            "Security Engineering",
        ],
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Computer Science",
        university_name="University of Camerino",
        country="Italy",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Not specified
                from_date=None,
                to_date=date(2026, 3, 31),
            )
        ],
        specializations=[
            "Business Information Systems",
            "Artificial Intelligence",
            "Software Development and Technologies",
            "Methodologies and Technologies for Digital Communication",
        ],
        application_fee=20,
    ),
    # Program(
    #     name="Computer Science and Information Technology",
    #     university_name="Ca' Foscari University of Venice",
    #     windows=[
    #         ApplicationWindow(
    #             from_date=date(2025, 12, 17),
    #             to_date=None,
    #         )
    #     ],
    #     specializations=[
    #         "Software Development and Engineering",
    #         "Artificial Intelligence and Data Engineering",
    #         "Cybersecurity",
    #     ],
    #     application_fee=30,
    # ),
    Program(
        name="Computer Science",
        university_name="University of Genoa",
        country="Italy",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2025, 11, 26),
                to_date=date(2026, 3, 20),
            )
        ],
        specializations=[
            "Data Science & Engineering",
            "Software Security & Engineering",
        ],
        application_fee=30,
    ),
    # Program(
    #     name="Computer Science",
    #     university_name="University of Insubria",
    #     windows=[
    #         ApplicationWindow(
    #             semester=TARGET_SEMESTER,
    #             from_date=None,
    #             to_date=None,
    #         )
    #     ],
    #     specializations=None,
    #     application_fee=None,
    # ),
    Program(
        name="Computer Science and Engineering",
        university_name="Politecnico di Milano",
        country="Italy",
        windows=[
            # ApplicationWindow(
            #     semester=TARGET_SEMESTER,
            #     from_date=date(2025, 10, 1),
            #     to_date=date(2025, 12, 1),
            # ),
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 1, 13),
                to_date=date(2026, 2, 26),
            ),
        ],
        specializations=[
            "Ambient and data intelligence",
            "Artificial intelligence and machine learning",
            "Big data and data science",
            "Bioinformatics and e-health",
            "Business informatics, analytics and intelligence",
            "Cybersecurity",
            "Interactive applications",
            "Internet engineering",
            "Pervasive Systems",
            "Robotics and Vision",
            "Software engineering for complex systems",
        ],
        # Not specified
        application_fee=None,
    ),
    Program(
        name="Engineering in Computer Science",
        university_name="University of Messina",
        country="Italy",
        windows=[
            # ApplicationWindow(
            #     semester=TARGET_SEMESTER,
            #     from_date=date(2025, 11, 24),
            #     to_date=date(2025, 12, 22),
            # ),
            # ApplicationWindow(
            #     semester=TARGET_SEMESTER,
            #     from_date=date(2026, 2, 1),
            #     to_date=date(2026, 3, 31),
            # ),
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 4, 13),
                to_date=date(2026, 5, 10),
            ),
        ],
        # Not specified
        specializations=None,
        application_fee=30,
    ),
    Program(
        name="Computer Science",
        university_name="University of Padua",
        country="Italy",
        windows=[
            # ApplicationWindow(
            #     semester=TARGET_SEMESTER,
            #     from_date=date(2025, 11, 2),
            #     to_date=date(2026, 2, 2),
            # ),
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 3, 2),
                to_date=date(2026, 5, 2),
            ),
        ],
        # Not specified
        specializations=None,
        application_fee=60,
    ),
    Program(
        name="Computer Science",
        university_name="University of Pisa",
        country="Italy",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2025, 12, 1),
                to_date=date(2026, 2, 5),
            )
        ],
        specializations=[
            "Artificial Intelligence",
            "Big Data Technologies",
            "Foundations of Software",
            "ICT Solutions Architect",
        ],
        application_fee=30,
    ),
    Program(
        name="Computer Science",
        university_name="Sapienza University of Rome",
        country="Italy",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2025, 12, 22),
                to_date=date(2026, 5, 15),
            )
        ],
        # Single curriculum
        specializations=None,
        application_fee=30,
    ),
    Program(
        name="Computer Science",
        university_name="University of Trento",
        country="Italy",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                # Not specified
                from_date=None,
                to_date=date(2026, 3, 4),
            )
        ],
        specializations=[
            "Computer Science and Technologies",
            "ICT Innovation",
        ],
        application_fee=30,
    ),
    Program(
        name="Software Engineering",
        university_name="Free University of Bozen-Bolzano",
        country="Italy",
        windows=[
            ApplicationWindow(
                semester=TARGET_SEMESTER,
                from_date=date(2026, 3, 2),
                to_date=date(2026, 4, 28),
            )
        ],
        specializations=None,
        application_fee=50,
    ),
]
