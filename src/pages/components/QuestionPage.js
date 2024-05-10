import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

function QuestionsPage() {
  const user = useSelector((state) => state.app);
  const [data, setData] = useState(null);
  const getQuestions = async () => {
    try {
      const response = await axios.get("https://sandbox.practical.me/api/faq", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setData(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div class="container rounded  m-5 p-5 ">
      <h1>FAQ</h1>
      <div class="accordion" id="accordionExample">
        {data &&
          data.map((question) => {
            return (
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + `${question.id}`}
                  >
                    {question.question}
                  </button>
                </h2>
                <div
                  id={"collapse" + `${question.id}`}
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{question.answer}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default QuestionsPage;
