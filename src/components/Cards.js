import React from 'react';

const cardsData = [
  { title: 'Upcoming Classes', description: 'Stay on track with the latest class schedules.' },
  { title: 'Assignments', description: 'Manage your assignments and due dates with ease.' },
  { title: 'Notifications', description: 'Receive updates about important events.' },
  { title: 'Performance Metrics', description: 'Track your progress with detailed analytics.' }
];

const Cards = () => {
  return (
    <section className="container mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="card bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
