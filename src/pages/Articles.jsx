import React from 'react'
import Badge from "react-bootstrap/Badge";

const articles = [
  {
    id: 1,
    title: "Honesty is the first chapter in the book of wisdom",
    status: "Published",
    updated: "2 days ago",
  },
  {
    id: 2,
    title: "No legacy is so rich as honesty",
    status: "Draft",
    updated: "1 week ago",
  },
  {
    id: 3,
    title: "Mastering Dialogue in Fiction: Techniques for Realistic Conversations",
    status: "Review",
    updated: "2 weeks ago",
  },
  {
    id: 4,
    title: "Honesty is more than not lying",
    status: "Rejected", //
    updated: "3 weeks ago",
  },
];


const getBadgeVariant = (status) => {
  switch (status) {
    case "Published":
      return "success";  
    case "Draft":
      return "warning"; 
    case "Review":
      return "primary";  
    case "Rejected":
      return "danger";    
    default:
      return "secondary"; 
  }
};

const Articles = () => {
  return (
    <div className="articles-card">
      <h2 className="articles-title">My Articles</h2>
      {articles.length > 0 ? (
        <table className="table table-borderless">
          <thead>
            <tr>
              <th style={{ width: "70%" }}>Title</th>
              <th style={{ width: "20%" }}>Status</th>
              <th style={{ width: "20%" }}>Last Edited</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>
                  <Badge pill bg={getBadgeVariant(article.status)}>
                    {article.status}
                  </Badge>
                </td>
                <td className="text-muted">{article.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
      <p>No articles yet.</p>
      )}
    </div>
  );
};


export default Articles;