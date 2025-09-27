import React from 'react';
import { User } from 'lucide-react';

const conversations = [
  { id: 'ubh62z', language: 'hi hindi', date: 'Sep 27, 2025', messages: 10, snippet: 'इस सेमेस्टर की फीस भुगतान की अंतिम तारीख इस महीने की 15 तारीख है। देर से भुगतान पर विलंब शुल्क लगेगा। अगर आपको और जानकारी चाहिए, तो...' },
  { id: 'cx1odu', language: 'en english', date: 'Sep 25, 2025', messages: 3, snippet: 'You can find your exam timetable two weeks before exams published on the notice board and the college website. Keep an eye out f...' },
  { id: 'os1tqo', language: 'mr marathi', date: 'Sep 25, 2025', messages: 3, snippet: 'माझ्याकडे फी भरण्याची शेवटची तारीख संबंधित माहिती नाही. कृपया याबद्दल अधिक माहितीसाठी परीक्षा कार्यालयाशी संपर्क साधा.' },
  { id: '4c2v7z', language: 'en english', date: 'Sep 15, 2025', messages: 3, snippet: 'The semester fees must be paid by the 15th of each month. If you miss this deadline, there will be a late payment penalty of ₹500. Yo...' },
  { id: '3i2c8p', language: 'en english', date: 'Sep 15, 2025', messages: 3, snippet: 'The updated class timetables are available on the college website and notice boards. You can also download the college app for real-t...' },
];

export default function RecentConversations() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Recent Conversations</h2>
      <div className="space-y-4">
        {conversations.map((conv) => (
          <div key={conv.id} className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <User size={24} className="text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">Student {conv.id}</p>
                <span className="text-xs text-gray-400">{conv.language}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{conv.snippet}</p>
              <div className="flex items-center text-xs text-gray-400 mt-2">
                <span className="mr-4">🗓️ {conv.date}</span>
                <span>💬 {conv.messages} messages</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}