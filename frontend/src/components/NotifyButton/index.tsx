import { toast } from 'react-toastify';
import { api } from '../../services/api';

import styles from './styles.module.css';

interface NotifyButtonProps {
  saleId: number;
}

export function NotifyButton({ saleId }: NotifyButtonProps) {
  function handleNotifySms(id: number) {
    api
      .get(`/sales/${id}/notification`)
      .then(() => toast.info('SMS enviado com sucesso!'))
      .catch(() => toast.error('Não foi possível enviar o SMS'));
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="none"
      viewBox="0 0 45 45"
      onClick={() => handleNotifySms(saleId)}
      className={styles.notificationButton}>
      <rect
        width="44"
        height="44"
        x="0.5"
        y="0.5"
        fill="#FF6B72"
        fillOpacity="0.1"
        stroke="#FF6B72"
        rx="9.5"></rect>
      <path
        fill="#FF6B72"
        d="M28.09 15.805a6.227 6.227 0 00-6.228-6.227 6.227 6.227 0 00-3.641 11.28l-.023.01a9.357 9.357 0 00-2.996 2.024 9.377 9.377 0 00-2.019 3 9.38 9.38 0 00-.738 3.468.2.2 0 00.2.206h1.505a.202.202 0 00.201-.195 7.493 7.493 0 012.2-5.13 7.443 7.443 0 015.31-2.208 6.227 6.227 0 006.229-6.228zm-6.228 4.32a4.319 4.319 0 110-8.638 4.319 4.319 0 010 8.638zm2.637 5.55h6.629c.11 0 .2-.091.2-.202v-1.406c0-.11-.09-.2-.2-.2h-4.432l1.185-1.51a.201.201 0 00-.158-.324H25.9a.41.41 0 00-.317.153l-1.72 2.187a.806.806 0 00.636 1.301zm6.026 1.606h-6.63c-.11 0-.2.09-.2.201v1.406c0 .11.09.201.2.201h4.433l-1.185 1.51a.201.201 0 00.158.324h1.823a.41.41 0 00.317-.154l1.72-2.187a.806.806 0 00-.636-1.3z"></path>
    </svg>
  );
}
