import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AvatarIcon } from "../AvatarIcon";
import styles from "./styles.module.css"


export function SalesCard() {
  return (
    <div className={styles.dsmetaCard}>
      <h2 className={styles.dsmetaSalesTitle}>Vendas</h2>
      <div>
        <div className={styles.dsmetaFormControlContainer}>
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => { }}
            className={styles.dsmetaFormControl}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className={styles.dsmetaFormControlContainer}>
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => { }}
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
            <tr>
              <td className={styles.show992}>#341</td>
              <td className={styles.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={styles.show992}>15</td>
              <td className={styles.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <div className="dsmeta-red-btn">
                    <AvatarIcon />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.show992}>#341</td>
              <td className={styles.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={styles.show992}>15</td>
              <td className={styles.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <div className="dsmeta-red-btn">
                    <AvatarIcon />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.show992}>#341</td>
              <td className={styles.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={styles.show992}>15</td>
              <td className={styles.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <div className="dsmeta-red-btn">
                    <AvatarIcon />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}