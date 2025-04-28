const resolvers = {
  Query: {
    getAppointment: (_, { id }) => {
      // Sample data
      const appointments = [
        {
          id: '1',
          Work_Type: 'Repair',
          Status: 'Pending',
          Appointment_ID: 'A001',
          products: [
            { id: '1', Product: 'Brake Pads', Product_ID: 'P001' }
          ],
          customers: [
            { id: '1', Customer_name: 'John Doe', Address: '123 Main St', Mobile: '1234567890' }
          ]
        }
      ];
      return appointments.find(appointment => appointment.id === id);
    }
  },
  Mutation: {
    editApplyForFinance: (_, { input }) => {
      // Sample data
      const appointments = [
        {
          id: '1',
          Work_Type: 'Repair',
          Status: 'Pending',
          Appointment_ID: 'A001',
          products: [
            { id: '1', Product: 'Brake Pads', Product_ID: 'P001' }
          ],
          customers: [
            { id: '1', Customer_name: 'John Doe', Address: '123 Main St', Mobile: '1234567890' }
          ]
        }
      ];
      
      // Imagine logic to fetch actual appointment and update finance details
      const appointment = appointments.find(appointment => appointment.id === input.id);
      if (appointment) {
        // Placeholder for updating logic
        console.log(`Finance amount for appointment ${input.id} updated to ${input.Finance_amount}`);
        return appointment;
      } else {
        throw new Error("Appointment not found");
      }
    }
  }
};

export default resolvers;