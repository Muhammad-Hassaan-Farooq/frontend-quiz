import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

function UserPage() {
  const user = useSelector((state) => state.app);
  const [data, setData] = useState(null);
  console.log("data", data);
  const token = user.token;

  const getTable = async () => {
    try {
      const response = await axios.get(
        "https://sandbox.practical.me/api/user/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTable();
  }, []);

  return (
    <div class="d-flex justify-content-center">
      {data && (
        <div class="card shadow-lg p-3 mb-5 bg-body rounded m-5">
          <div class="d-flex justify-content-center">
            <h1>{data.first_name + " " + data.sur_name}</h1>
          </div>
          <div class="d-flex justify-content-center">
            <h2>{data.email}</h2>
          </div>
          <table class="table table-striped table-bordered">
            <thead class="table-dark">
              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Wallet ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Transaction Type</th>
                <th scope="col">Transaction Date</th>
                <th scope="col">Order ID</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {data.wallet.map((wallet) => {
                return (
                  <tr>
                    <th scope="row">{wallet.id}</th>
                    <td>{wallet.wallet_id}</td>
                    <td>{wallet.amount}</td>
                    <td>{wallet.transaction_type}</td>
                    <td>{wallet.transaction_date}</td>
                    <td>{wallet.order_id}</td>
                    <td>{wallet.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserPage;
