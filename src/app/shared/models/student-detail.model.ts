export interface StudentDetails {
  id: string;
  profile: StudentProfile;
  academic: Academic;
  attendance: Attendance;
  parents: ParentDetails;
  fees: Fees;
  health: Health;
  activities: string[];
  achievements: Achievement[];
  timeline: TimelineEvent[];
}

export interface StudentProfile {
  name: string;
  photo: string;
  rollNo: string;
  admissionNo: string;
  class: string;
  section: string;
  gender: string;
  dateOfBirth: string;
  bloodGroup: string;
  house: string;
  admissionDate: string;
}

export interface Academic {
  overallPercentage: number;
  overallGrade: string;
  classRank: number;
  classStrength: number;
  attendance: number;
  teacherRemark: string;
  subjects: Subject[];
}

export interface Subject {
  subjectName: string;
  teacher: string;
  overallPercentage: number;
  grade: string;
  exams: Exam[];
}

export interface Exam {
  examName: string;
  obtainedMarks: number;
  totalMarks: number;
  passMarks: number;
  classAverage: number;
  highestMarks: number;
  rank: number;
  teacherRemark: string;
  examDate: string;
}

export interface Attendance {
  presentDays: number;
  absentDays: number;
  lateEntries: number;
}

export interface ParentDetails {
  fatherName: string;
  motherName: string;
  guardianPhone: string;
  email: string;
  address: string;
}

export interface Fees {
  status: 'Paid' | 'Pending' | 'Partially Paid';
  totalFees: number;
  paidAmount: number;
  pendingAmount: number;
  lastPaymentDate: string;
}

export interface Health {
  height: number;
  weight: number;
  bloodGroup: string;
  vision: string;
  medicalCondition: string;
}

export interface Achievement {
  title: string;
  date: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
}
