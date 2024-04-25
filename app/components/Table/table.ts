export type User = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
  subRows?: {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    progress: number;
    status: string;
  }[];
};

export const tableData: User[] = [
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
    // subRows: [
    //   {
    //     firstName: "Sarah",
    //     lastName: "Miller",
    //     age: 35,
    //     visits: 220,
    //     progress: 80,
    //     status: "Married",
    //   },
    // ],
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    age: 45,
    visits: 150,
    progress: 75,
    status: "Divorced",
  },
  {
    firstName: "Jessica",
    lastName: "Smith",
    age: 29,
    visits: 120,
    progress: 90,
    status: "Single",
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    age: 38,
    visits: 180,
    progress: 60,
    status: "Married",
  },
  {
    firstName: "Sarah",
    lastName: "Miller",
    age: 35,
    visits: 220,
    progress: 80,
    status: "Married",
  },
  {
    firstName: "David",
    lastName: "Davis",
    age: 41,
    visits: 90,
    progress: 30,
    status: "Single",
  },
  {
    firstName: "Rachel",
    lastName: "Wilson",
    age: 31,
    visits: 110,
    progress: 95,
    status: "Married",
  },
  {
    firstName: "Andrew",
    lastName: "Anderson",
    age: 50,
    visits: 130,
    progress: 70,
    status: "Divorced",
  },
  {
    firstName: "Lauren",
    lastName: "Taylor",
    age: 26,
    visits: 140,
    progress: 85,
    status: "Single",
  },
  {
    firstName: "James",
    lastName: "Martinez",
    age: 32,
    visits: 160,
    progress: 40,
    status: "Married",
  },
  {
    firstName: "Amanda",
    lastName: "Harris",
    age: 39,
    visits: 170,
    progress: 55,
    status: "Married",
  },
  {
    firstName: "Christopher",
    lastName: "Garcia",
    age: 28,
    visits: 190,
    progress: 65,
    status: "Single",
  },
  {
    firstName: "Stephanie",
    lastName: "Clark",
    age: 36,
    visits: 210,
    progress: 45,
    status: "Divorced",
  },
  {
    firstName: "Matthew",
    lastName: "Lewis",
    age: 43,
    visits: 200,
    progress: 70,
    status: "Married",
  },
  {
    firstName: "Jennifer",
    lastName: "Lee",
    age: 34,
    visits: 180,
    progress: 80,
    status: "Divorced",
  },
  {
    firstName: "Justin",
    lastName: "Wright",
    age: 30,
    visits: 150,
    progress: 90,
    status: "Single",
  },
  {
    firstName: "Megan",
    lastName: "King",
    age: 29,
    visits: 170,
    progress: 55,
    status: "Single",
  },
  {
    firstName: "Nicholas",
    lastName: "Evans",
    age: 37,
    visits: 160,
    progress: 75,
    status: "Married",
  },
  {
    firstName: "Samantha",
    lastName: "Parker",
    age: 33,
    visits: 140,
    progress: 85,
    status: "Divorced",
  },
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    age: 45,
    visits: 150,
    progress: 75,
    status: "Divorced",
  },
  {
    firstName: "Jessica",
    lastName: "Smith",
    age: 29,
    visits: 120,
    progress: 90,
    status: "Single",
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    age: 38,
    visits: 180,
    progress: 60,
    status: "Married",
  },
  {
    firstName: "Sarah",
    lastName: "Miller",
    age: 35,
    visits: 220,
    progress: 80,
    status: "Married",
  },
  {
    firstName: "David",
    lastName: "Davis",
    age: 41,
    visits: 90,
    progress: 30,
    status: "Single",
  },
  {
    firstName: "Rachel",
    lastName: "Wilson",
    age: 31,
    visits: 110,
    progress: 95,
    status: "Married",
  },
  {
    firstName: "Andrew",
    lastName: "Anderson",
    age: 50,
    visits: 130,
    progress: 70,
    status: "Divorced",
  },
  {
    firstName: "Lauren",
    lastName: "Taylor",
    age: 26,
    visits: 140,
    progress: 85,
    status: "Single",
  },
  {
    firstName: "James",
    lastName: "Martinez",
    age: 32,
    visits: 160,
    progress: 40,
    status: "Married",
  },
  {
    firstName: "Amanda",
    lastName: "Harris",
    age: 39,
    visits: 170,
    progress: 55,
    status: "Married",
  },
  {
    firstName: "Christopher",
    lastName: "Garcia",
    age: 28,
    visits: 190,
    progress: 65,
    status: "Single",
  },
  {
    firstName: "Stephanie",
    lastName: "Clark",
    age: 36,
    visits: 210,
    progress: 45,
    status: "Divorced",
  },
  {
    firstName: "Matthew",
    lastName: "Lewis",
    age: 43,
    visits: 200,
    progress: 70,
    status: "Married",
  },
  {
    firstName: "Jennifer",
    lastName: "Lee",
    age: 34,
    visits: 180,
    progress: 80,
    status: "Divorced",
  },
  {
    firstName: "Justin",
    lastName: "Wright",
    age: 30,
    visits: 150,
    progress: 90,
    status: "Single",
  },
  {
    firstName: "Megan",
    lastName: "King",
    age: 29,
    visits: 170,
    progress: 55,
    status: "Single",
  },
  {
    firstName: "Nicholas",
    lastName: "Evans",
    age: 37,
    visits: 160,
    progress: 75,
    status: "Married",
  },
  {
    firstName: "Samantha",
    lastName: "Parker",
    age: 33,
    visits: 140,
    progress: 85,
    status: "Divorced",
  },
];
