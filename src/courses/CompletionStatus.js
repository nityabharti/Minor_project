// CompletionStatus.js

import React from "react";

function CompletionStatus({ completedTopics }) {
  return (
    <div>
      <h3>Completion Status</h3>
      <ul>
        {completedTopics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompletionStatus;
