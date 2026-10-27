import TextStagger from "../components/textStagger";
import Button from "../components/button";
import GridAnim from "../components/gridAnim";

const DataView = ({ onBack, users, onClearUsers }) => {
  return (
    <div className="box flex flex-row text-base">
      <div className="left_box flex flex-1 items-center justify-center border-r h-dvh border-stone-800">
        <div className="form_wrapper flex flex-col items-center w-full max-w-lg gap-6">
          <p className="text-4xl mb-4 w-full">
            <TextStagger text="USER DATABASE" />
          </p>

          <div className="w-full max-h-72 overflow-y-auto border border-stone-800 rounded bg-stone-900/30">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="sticky top-0 bg-stone-900 border-b border-stone-800 text-stone-400 uppercase text-xs">
                <tr>
                  <th className="py-2 px-2">#</th>
                  <th className="py-2 px-2">Username</th>
                  <th className="py-2 px-2">Email</th>
                  <th className="py-2 px-2">Password</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 font-mono">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-stone-500">
                      No users found. Database is empty.
                    </td>
                  </tr>
                ) : (
                  users.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-stone-800/40 duration-150"
                    >
                      <td className="py-2 px-2 text-stone-500">{index + 1}</td>
                      <td className="py-2 px-2 text-stone-200">
                        {item.username}
                      </td>
                      <td className="py-2 px-2 text-stone-300">{item.email}</td>
                      <td className="py-2 px-2 text-stone-400">
                        {item.password}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="nav_action flex gap-3">
            <Button variant="secondary" onClick={onBack}>
              {"<"} Back
            </Button>
            <Button
              variant="secondary"
              onClick={onClearUsers}
              disabled={users.length === 0}
            >
              Clear database
            </Button>
          </div>
        </div>
      </div>
      <div className="right_box flex flex-1 h-dvh">
        <GridAnim />
      </div>
    </div>
  );
};

export default DataView;
