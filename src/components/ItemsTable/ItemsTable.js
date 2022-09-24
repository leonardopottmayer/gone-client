import React from "react";

import styles from "./ItemsTable.module.css";

import items from "../../data/items.json";

import qrCode from "../../assets/qr-code.png";

const ItemsTable = () => {
  return (
    <div className={styles.main}>
      <table className={styles.table}>
        <thead className={styles.table_header}>
          <tr className={styles.table_row_header}>
            <th className={styles.table_th}>Imagem</th>
            <th className={styles.table_th}>Descrição</th>
            <th className={styles.table_th}>Local onde foi achado</th>
            <th className={styles.table_th}>QR Code para resgate</th>
          </tr>
        </thead>

        <tbody className={styles.table_body}>
          {items.list.map((it) => (
            <tr key={it.id} className={styles.table_row}>
              <td className={styles.table_td}>
                <img
                  src={it.image}
                  alt={it.description}
                  className={styles.item_image}
                />
              </td>
              <td className={styles.table_td}>{it.description}</td>
              <td className={styles.table_td}>{it.local}</td>
              <td className={styles.table_td}>
                <img
                  src={qrCode}
                  alt={it.description}
                  className={styles.item_image}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsTable;
