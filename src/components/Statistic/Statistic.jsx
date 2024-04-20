import moduleCss from './statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={moduleCss.statisticItem}>
        Good: <span className={moduleCss.statisticNum}>{good}</span>
      </p>
      <p className={moduleCss.statisticItem}>
        Neutral: <span className={moduleCss.statisticNum}>{neutral}</span>
      </p>
      <p className={moduleCss.statisticItem}>
        Bad: <span className={moduleCss.statisticNum}>{bad}</span>
      </p>
      <p className={moduleCss.statisticItem}>
        Total feedback:
        <span className={moduleCss.statisticNum}>{total}</span>
      </p>
      <p className={moduleCss.statisticItem}>
        Positive feedback percentage:
        <span className={moduleCss.statisticNum}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Statistic;
