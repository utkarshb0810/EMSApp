import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleAccept = () => {
    const updatedData = userData.map((user) => {
      const updatedTasks = user.tasks.map((task) => {
        if (task.id === data.id) {
          return {
            ...task,
            newTask: false,
            active: true,
          };
        }
        return task;
      });

      return {
        ...user,
        tasks: updatedTasks,
        taskCounts: {
          ...user.taskCounts,
          newTask: user.taskCounts.newTask - 1,
          active: user.taskCounts.active + 1,
        },
      };
    });

    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-6">
        <button
          className="bg-blue-500 rounded font-medium py-1 px-2 text-xs"
          onClick={handleAccept}
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
