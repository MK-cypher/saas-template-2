// 'use server'

export const getContactNumbers = () => {
  return [
    {
      id: 0,
      number: 100,
    },
    {
      id: 1,
      number: 150,
    },
    {
      id: 2,
      number: 5,
    },
    {
      id: 3,
      number: 10,
    },
    {
      id: 4,
      number: 50,
    },
    {
      id: 5,
      number: 900,
    },
    {
      id: 6,
      number: 100,
    },
    {
      id: 7,
      number: 100,
    },
    {
      id: 8,
      number: 100,
    },
    {
      id: 9,
      number: 100,
    },
    {
      id: 10,
      number: 100,
    },
  ];
};

export const getContactMail = () => {
  return [
    {
      id: 0,
      unread: true,
      img: "/hero.jpg",
      sender: "Michael Wilson",
      repyTo: "williamsmith@example.com",
      sentDate: "Mar 10, 2023",
      sentTime: " 3:00:00 PM",
      subject: "Meeting Tomorrow",
      tags: ["meeting", "work", "Important"],
      message: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.
    Please come prepared with any questions or insights you may have. Looking forward to our meeting!
    Best regards, William`,
    },
    {
      id: 1,
      unread: false,
      img: "/hero.jpg",
      sender: "Alice Smith",
      repyTo: "alicesmith@example.com",
      sentDate: "Mar 10, 2023",
      sentTime: " 3:00:00 PM",
      subject: "Re: Project Update",
      tags: ["meeting", "work", "Important"],
      message: `Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.
    I have a few minor suggestions that I'll include in the attached document.
    Let's discuss these during our next meeting. Keep up the excellent work!
    Best regards, Alice`,
    },
  ];
};
