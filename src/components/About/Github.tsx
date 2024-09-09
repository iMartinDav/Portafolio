import React from "react";
import GitHubCalendar, { Props } from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github: React.FC = () => {
  const username = "iMartinDav";

  const calendarStyle = {
    color: "#c084f5",
  };

  const selectLastHalfYear: Props["transformData"] = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username={username}
        year="last"
        blockMargin={5}
        blockRadius={3}
        blockSize={15}
        colorScheme="light"
        errorMessage="Failed to load data"
        fontSize={16}
        hideColorLegend
        hideMonthLabels
        hideTotalCount
        labels={{ totalCount: "{{count}} contributions in the last half year" }}
        loading
        style={calendarStyle}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
        throwOnError
        totalCount={100}
        transformData={selectLastHalfYear}
        transformTotalCount={false}
        weekStart={1}
        showWeekdayLabels={["mon", "wed", "fri"]}
        renderBlock={(block, activity) => (
          <div title={`${activity.count} contributions on ${activity.date}`}>
            {block}
          </div>
        )}
        renderColorLegend={(block, level) => (
          <div title={`Level ${level}`}>{block}</div>
        )}
      />
    </Row>
  );
};

export default Github;
