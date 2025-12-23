import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { subject: 'Secrecy', A: 90, B: 40, fullMark: 100 },
  { subject: 'Small Key', A: 20, B: 90, fullMark: 100 },
  { subject: 'Simplicity', A: 30, B: 80, fullMark: 100 },
  { subject: 'Low Error Prop', A: 50, B: 70, fullMark: 100 },
  { subject: 'No Msg Exp', A: 80, B: 80, fullMark: 100 },
];

const CriteriaRadar: React.FC = () => {
  return (
    <div className="w-full h-96 bg-white p-4 border border-gray-200">
      <h4 className="text-center text-sm font-bold text-gray-800 mb-2 font-serif uppercase tracking-widest">Fig 15. System Trade-offs</h4>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#e5e5e5" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#333', fontSize: 11, fontFamily: 'serif', fontWeight: 'bold' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          
          <Radar
            name="Theoretical Ideal (OTP)"
            dataKey="A"
            stroke="#d9232e"
            strokeWidth={2}
            fill="#d9232e"
            fillOpacity={0.1}
          />
          <Radar
            name="Practical Cipher (AES)"
            dataKey="B"
            stroke="#1a1a1a"
            strokeWidth={2}
            fill="#1a1a1a"
            fillOpacity={0.1}
          />
          <Legend wrapperStyle={{ fontSize: '12px', fontFamily: 'serif', paddingTop: '10px' }}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CriteriaRadar;