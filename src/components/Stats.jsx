import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";

const formatter = (value) => <CountUp end={value} separator="," />;

const stats = [
  { id: 1, name: "Editions", value: "18" },
  { id: 2, name: "Participants", value: "2700+" },
  { id: 3, name: "Sponsors", value: "50+" },
  { id: 4, name: "Reach", value: "110000+" },
];

export default function Stats() {
  const cleanValue = (value) => parseInt(value.replace(/\D/g, ""), 10);

  return (
    <>
      <div className="stats-container">
        <Row gutter={16} className="stats">
          {stats.map((stat) => (
            <Col key={stat.id} xs={24} sm={12} md={6} lg={6} xl={6}>
              <Statistic
                title={stat.name}
                value={cleanValue(stat.value)}
                formatter={formatter}
                suffix={stat.value.includes("+") ? "+" : ""}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
