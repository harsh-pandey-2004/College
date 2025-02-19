import React from 'react';
import { 
  Globe, 
  UserPlus, 
  Mail, 
  FileText, 
  CreditCard, 
  FileCheck,
  ArrowDown 
} from 'lucide-react';

const theme = {
  primary: "#7C3AED",
  secondary: "#ffffff",
  text: "#fff",
  accent: "#FF5733",
};

const AdmissionProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Visit the official website",
      description: "Visit the official website to initiate the application process",
      icon: <Globe className="w-6 h-6" />
    },
    {
      number: 2,
      title: "Register Details",
      description: "Register using essential details such as Name, Email ID, and Contact Details",
      icon: <UserPlus className="w-6 h-6" />
    },
    {
      number: 3,
      title: "Receive Credentials",
      description: "Receive an email containing the registration number and password",
      icon: <Mail className="w-6 h-6" />
    },
    {
      number: 4,
      title: "Provide Information",
      description: "Provide information about education and work experience, followed by an undertaking",
      icon: <FileText className="w-6 h-6" />
    },
    {
      number: 5,
      title: "Make Payment",
      description: "Make the payment with the registration amount of INR 5,500; additional time is provided for pending payments",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      number: 6,
      title: "Upload Documents",
      description: "Attach the necessary documents, including 10th and 12th mark sheets, degree certificates, UG mark sheet and degree, Aadhar Card or any government ID, and a photograph",
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h1>
          <p className="text-lg text-gray-600">
            The admissions process takes place in online mode. Fresh admission starts from the month of January of every year.
          </p>
        </div>

        <div className="">
          {steps.map((step, index) => (
            <div key={step.number} className="mb-8">
              <div className="flex items-start gap-8 p-6 bg-white rounded-xl shadow-md">
                <div 
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: theme.primary }}
                >
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold" style={{ color: theme.primary }}>
                      STEP {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;