import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Sale } from '../../models/sale';
import { api } from '../../services/api';
import { NotifyButton } from '../NotifyButton';
import styles from './styles.module.css';

export function SalesCard() {
  const minDateFormatted = new Date(
    new Date().setDate(new Date().getDate() - 365)
  );
  const maxDateFormatted = new Date();

  const [minDate, setMinDate] = useState(minDateFormatted);
  const [maxDate, setMaxDate] = useState(maxDateFormatted);
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const maxDateISO = maxDate.toISOString().slice(0, 10);
    const minDateISO = minDate.toISOString().slice(0, 10);

    api
      .get(`/sales/?minDate=${minDateISO}&maxDate=${maxDateISO}`)
      .then(({ data }) => setSales(data.content));
  }, [minDate, maxDate]);

  return (
    <div className={styles.dsmetaCard}>
      <h2 className={styles.dsmetaSalesTitle}>Vendas</h2>
      <div>
        <div className={styles.dsmetaFormControlContainer}>
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className={styles.dsmetaFormControl}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className={styles.dsmetaFormControlContainer}>
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className={styles.dsmetaFormControl}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className={styles.dsmetaSalesTable}>
          <thead>
            <tr>
              <th className={styles.show992}>ID</th>
              <th className={styles.show576}>Data</th>
              <th>Vendedor</th>
              <th className={styles.show992}>Visitas</th>
              <th className={styles.show992}>Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td className={styles.show992}>{sale.id}</td>
                <td className={styles.show576}>
                  {new Intl.DateTimeFormat('pt-br').format(new Date(sale.date))}
                </td>
                <td>{sale.sellerName}</td>
                <td className={styles.show992}>{sale.visited}</td>
                <td className={styles.show992}>{sale.deals}</td>
                <td>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(sale.amount)}
                </td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <div className="dsmeta-red-btn">
                      <NotifyButton saleId={sale.id} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
