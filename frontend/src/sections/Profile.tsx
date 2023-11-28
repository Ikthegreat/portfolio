import InfoCard from '@components/InfoCard';
import { INFOCARD } from '@contexts/index';

function Profile() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div></div>
      <InfoCard icon="person" title="t" content="c" />
    </div>
  );
}

export default Profile;
