import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { WorkflowsList } from "../client";

const WorkflowsTemplateList = ({ workflows }: { workflows: WorkflowsList }) => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: { id: string }) => (
        <Button
          type="primary"
          onClick={() => navigate(`/workflow/${record.id}`)}
        >
          Open details
        </Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={workflows.map((workflow) => ({
        ...workflow,
        key: workflow.id,
      }))}
      columns={columns}
    />
  );
};

export default WorkflowsTemplateList;
