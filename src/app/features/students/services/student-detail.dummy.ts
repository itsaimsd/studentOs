import { StudentDetails } from "../../../shared/models/student-detail.model";

export const DUMMY_STUDENT_DETAILS: StudentDetails[] = [
  {
    id: '001',
    profile: {
      name: 'Madhusudan Kumar',
      photo: 'https://i.pravatar.cc/300?img=12',
      rollNo: '12',
      admissionNo: 'ADM-2022-001',
      class: '10',
      section: 'B',
      gender: 'Male',
      dateOfBirth: '2009-06-18',
      bloodGroup: 'B+',
      house: 'Tagore',
      admissionDate: '2022-04-12',
    },

    academic: {
      overallPercentage: 91.6,
      overallGrade: 'A+',
      classRank: 3,
      classStrength: 42,
      attendance: 93,
      teacherRemark:
        'Excellent academic performance with consistent improvement.',
      subjects: [
        {
          subjectName: 'Mathematics',
          teacher: 'Anita Sharma',
          overallPercentage: 95,
          grade: 'A+',
          exams: [
            {
              examName: 'Unit Test 1',
              obtainedMarks: 18,
              totalMarks: 20,
              passMarks: 8,
              classAverage: 15,
              highestMarks: 20,
              rank: 2,
              teacherRemark: 'Excellent calculations.',
              examDate: '2026-01-15',
            },
            {
              examName: 'Half Yearly',
              obtainedMarks: 92,
              totalMarks: 100,
              passMarks: 35,
              classAverage: 73,
              highestMarks: 98,
              rank: 3,
              teacherRemark: 'Very good logical thinking.',
              examDate: '2026-07-20',
            },
          ],
        },
        {
          subjectName: 'Science',
          teacher: 'Rahul Verma',
          overallPercentage: 90,
          grade: 'A',
          exams: [
            {
              examName: 'Unit Test 1',
              obtainedMarks: 17,
              totalMarks: 20,
              passMarks: 8,
              classAverage: 14,
              highestMarks: 20,
              rank: 5,
              teacherRemark: 'Good understanding.',
              examDate: '2026-01-17',
            },
          ],
        },
        {
          subjectName: 'English',
          teacher: 'Priya Singh',
          overallPercentage: 88,
          grade: 'A',
          exams:[]
        },
        {
          subjectName: 'Hindi',
          teacher: 'Neha Mishra',
          overallPercentage: 91,
          grade: 'A',
          exams:[]
        },
        {
          subjectName: 'Social Science',
          teacher: 'Vivek Gupta',
          overallPercentage: 89,
          grade: 'A',
          exams:[]
        },
        {
          subjectName: 'Computer Science',
          teacher: 'Rohit Jain',
          overallPercentage: 98,
          grade: 'A+',
          exams:[]
        },
        {
          subjectName: 'Sanskrit',
          teacher: 'Meena Sharma',
          overallPercentage: 87,
          grade: 'A',
          exams:[]
        },
      ],
    },

    attendance: {
      presentDays: 186,
      absentDays: 14,
      lateEntries: 3,
    },

    parents: {
      fatherName: 'Ramesh Kumar',
      motherName: 'Sunita Devi',
      guardianPhone: '+91 9876543210',
      email: 'parent001@gmail.com',
      address: 'Indore, Madhya Pradesh',
    },

    fees: {
      status: 'Paid',
      totalFees: 85000,
      paidAmount: 85000,
      pendingAmount: 0,
      lastPaymentDate: '2026-04-10',
    },

    health: {
      height: 170,
      weight: 60,
      bloodGroup: 'B+',
      vision: 'Normal',
      medicalCondition: 'None',
    },

    activities: ['Coding Club', 'Science Club', 'Cricket Team'],

    achievements: [
      {
        title: 'Mathematics Olympiad Runner Up',
        date: '2026-02-18',
      },
      {
        title: 'Science Exhibition Winner',
        date: '2026-05-10',
      },
    ],

    timeline: [
      {
        date: '2026-06-10',
        title: 'Won Mathematics Quiz',
      },
      {
        date: '2026-06-18',
        title: 'Parent Teacher Meeting',
      },
      {
        date: '2026-06-24',
        title: 'Fee Payment Completed',
      },
    ],
  }
];
