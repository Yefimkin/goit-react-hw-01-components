import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.title}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, amount, type, currency }) => {
                    
                    return (
                        <tr key={id} className={styles.row}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

TransactionHistory.prototypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}