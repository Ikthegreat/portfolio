import { InfoCardProps } from '@interfaces/components';
import Icon from '@utils/Icon';

function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className="w-1/5 h-20 fixed z-10 flex justify-around items-center">
      <Icon icon={icon} />
      <div>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default InfoCard;
