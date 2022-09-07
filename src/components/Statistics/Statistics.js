import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

export default function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className="stat-list">
                <li className="item">
                    <span className="label">.docx</span>
                    <span className="percentage">4%</span>
                </li>
                <li className="item">
                    <span className="label">.mp3</span>
                    <span className="percentage">14%</span>
                </li>
                <li className="item">
                    <span className="label">.pdf</span>
                    <span className="percentage">41%</span>
                </li>
                <li className="item">
                    <span className="label">.mp4</span>
                    <span className="percentage">12%</span>
                </li>
            </ul>
        </section>
    );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired
    stats: PropTypes.arrayOf({
        PropTypes.shape(
        
        })
    )
}