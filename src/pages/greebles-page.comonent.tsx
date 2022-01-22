import React from 'react';
import { toast } from 'react-toastify';
import jobService from '../services/api/job.service';
import { Images } from '../services';
import { useClientHints } from '../services/react-client.hints';
import { ImageCard } from '../components/cards';
const Greebles = () => {
  const ch = useClientHints();

  return (
    <div className="flex flex-row items-center justify-center min-h-screen">
      <ImageCard
        image={Images.Greeble1}
        title="Greeble 1"
        author={'Fergal Moran'}
        date={new Date().toISOString()}
        description={'Argle Bargle'}
      />
    </div>
  );
};
export default Greebles;
