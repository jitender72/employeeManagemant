const employees = [
  {
    id: 101,
    email: "alice.johnson@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Onboarding",
        taskDescription: "Send welcome package to NewCo.",
        taskDate: "2026-02-24",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Quarterly Report",
        taskDescription: "Finalize Q1 projections.",
        taskDate: "2026-02-15",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "System Audit",
        taskDescription: "Routine check on server logs.",
        taskDate: "2026-02-10",
        category: "IT",
      },
    ],
  },
  {
    id: 102,
    email: "bob.smith@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "UI Design Update",
        taskDescription: "Update landing page buttons.",
        taskDate: "2026-02-25",
        category: "Design",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Coffee Run",
        taskDescription: "Restock the breakroom supplies.",
        taskDate: "2026-02-23",
        category: "Maintenance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fix #404",
        taskDescription: "Fix broken links in footer.",
        taskDate: "2026-02-20",
        category: "Dev",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Monthly sync-up.",
        taskDate: "2026-02-18",
        category: "Internal",
      },
    ],
  },
  {
    id: 103,
    email: "charlie.davis@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Analyze competitor pricing.",
        taskDate: "2026-02-27",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Ad Campaign",
        taskDescription: "Launch Facebook ad set.",
        taskDate: "2026-02-10",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Newsletter",
        taskDescription: "Draft weekly newsletter.",
        taskDate: "2026-02-21",
        category: "Content",
      },
    ],
  },
  {
    id: 104,
    email: "dana.lee@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Cleanup",
        taskDescription: "Remove duplicate entries.",
        taskDate: "2026-02-26",
        category: "IT",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect Stripe API.",
        taskDate: "2026-02-28",
        category: "Dev",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Write docs for v2.0.",
        taskDate: "2026-02-15",
        category: "Technical",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123",
  },
];

// ṣetLocalStorage function

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  //   console.log(JSON.parse(employee));
  console.log(employee);

  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(admin);
};
