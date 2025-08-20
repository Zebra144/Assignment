import React, { useMemo, useState } from "react";
import Badge from "react-bootstrap/Badge";

const ALL_ARTICLES = [
  { id: 1,  title: "Honesty is the first chapter in the book of wisdom",        status: "Published", updated: "2 days ago" },
  { id: 2,  title: "No legacy is so rich as honesty",                           status: "Draft",     updated: "1 week ago" },
  { id: 3,  title: "Mastering Dialogue in Fiction: Techniques for Realistic Conversations", status: "Review", updated: "2 weeks ago" },
  { id: 4,  title: "Honesty is more than not lying",                             status: "Rejected",  updated: "3 weeks ago" },
  { id: 5,  title: "The Art of Storytelling #5",            status: "Published", updated: "4 days ago" },
  { id: 6,  title: "Crafting Compelling Characters #6",     status: "Draft",     updated: "5 days ago" },
  { id: 7,  title: "Mastering Dialogue in Fiction #7",      status: "Review",    updated: "6 days ago" },
  { id: 8,  title: "World-Building 101 #8",                 status: "Rejected",  updated: "1 week ago" },
  { id: 9,  title: "The Art of Storytelling #9",            status: "Published", updated: "1 week ago" },
  { id: 10, title: "Crafting Compelling Characters #10",    status: "Draft",     updated: "2 weeks ago" },
  { id: 11, title: "Mastering Dialogue in Fiction #11",     status: "Review",    updated: "2 weeks ago" },
  { id: 12, title: "World-Building 101 #12",                status: "Rejected",  updated: "3 weeks ago" },
  { id: 13, title: "The Art of Storytelling #13",           status: "Published", updated: "3 weeks ago" },
  { id: 14, title: "Crafting Compelling Characters #14",    status: "Draft",     updated: "4 weeks ago" },
  { id: 15, title: "Mastering Dialogue in Fiction #15",     status: "Review",    updated: "4 weeks ago" },
  { id: 16, title: "World-Building 101 #16",                status: "Rejected",  updated: "2 days ago" },
  { id: 17, title: "The Art of Storytelling #17",           status: "Published", updated: "5 days ago" },
  { id: 18, title: "Crafting Compelling Characters #18",    status: "Draft",     updated: "1 week ago" },
  { id: 19, title: "Mastering Dialogue in Fiction #19",     status: "Review",    updated: "2 weeks ago" },
  { id: 20, title: "World-Building 101 #20",                status: "Rejected",  updated: "3 weeks ago" },
];

const getBadgeVariant = (status) => {
  switch (status) {
    case "Published": return "success";
    case "Draft":     return "warning";
    case "Review":    return "primary";
    case "Rejected":  return "danger";
    default:          return "secondary";
  }
};

const Articles = () => {
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const totalPages = Math.max(1, Math.ceil(ALL_ARTICLES.length / pageSize));

  const rows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return ALL_ARTICLES.slice(start, start + pageSize);
  }, [page]);

  const go = (n) => setPage(Math.min(Math.max(1, n), totalPages));

  return (
    <div className="articles-card">
      <h4 className="articles-title">My Articles</h4>

      <table className="table table-borderless">
        <thead>
          <tr>
            <th style={{ width: "60%" }}>Title</th>
            <th style={{ width: "20%" }}>Status</th>
            <th style={{ width: "20%" }}>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>
                <Badge pill bg={getBadgeVariant(a.status)}>
                  {a.status}
                </Badge>
              </td>
              <td className="text-muted">{a.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pager">
        <button onClick={() => go(page - 1)} disabled={page === 1}>Prev</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button key={n} onClick={() => go(n)} className={n === page ? "active" : ""}>
            {n}
          </button>
        ))}
        <button onClick={() => go(page + 1)} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Articles;
