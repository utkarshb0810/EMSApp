import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (status) => {
    const updatedData = userData.map((user) => {
      const updatedTasks = user.tasks.map((task) => {
        if (task.id === data.id) {
          return {
            ...task,
            active: false,
            completed: status === "completed",
            failed: status === "failed",
          };
        }
        return task;
      });

      return {
        ...user,
        tasks: updatedTasks,
        taskCounts: {
          ...user.taskCounts,
          active: user.taskCounts.active - 1,
          completed:
            status === "completed"
              ? user.taskCounts.completed + 1
              : user.taskCounts.completed,
          failed:
            status === "failed"
              ? user.taskCounts.failed + 1
              : user.taskCounts.failed,
        },
      };
    });

    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-6">
        <button
          className="bg-green-500 rounded font-medium py-1 px-2 text-xs"
          onClick={() => updateTaskStatus("completed")}
        >
          Mark as Completed
        </button>
        <button
          className="bg-red-500 rounded font-medium py-1 px-2 text-xs"
          onClick={() => updateTaskStatus("failed")}
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
