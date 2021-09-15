import React, { useState } from "react";

function Keyboard() {
  const [query, setQuery] = useState("");

  const [data, setData] = useState("");

  const handleSubmit = () => {
    setData(query);
  };

  return (
    <div>
      <h1>Keyboard</h1>

      <div style={{ display: "flex" }}>
        <div>
          <div>
            <input
              placeholder="Value from 1-9"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div>
          {data == "1" ? (
            <span>
              <button style={{ backgroundColor: "green", color: "white" }}>
                1
              </button>
            </span>
          ) : (
            <span>
              <button>1</button>
            </span>
          )}

          {data == "2" ? (
            <span>
              <button style={{ backgroundColor: "green", color: "white" }}>
                2
              </button>
            </span>
          ) : (
            <span>
              <button>2</button>
            </span>
          )}

          {data == "3" ? (
            <span>
              <button style={{ backgroundColor: "green", color: "white" }}>
                3
              </button>
            </span>
          ) : (
            <span>
              <button>3</button>
            </span>
          )}

          <br />
          {data == "4" ? (
            <span>
              <button style={{ backgroundColor: "green", color: "white" }}>
                4
              </button>
            </span>
          ) : (
            <span>
              <button>4</button>
            </span>
          )}

          {data == "5" ? (
            <span>
              <button style={{ backgroundColor: "green", color: "white" }}>
                5
              </button>
            </span>
          ) : (
            <span>
              <button>5</button>
            </span>
          )}

          {data == "6" ? (
            <span>
              <button style={{ backgroundColor: "green", color: "white" }}>
                6
              </button>
            </span>
          ) : (
            <span>
              <button>6</button>
            </span>
          )}
          <br />

          {data == "7" ? (
            <span>
              <button style={{ backgroundColor: "green", color: "white" }}>
                7
              </button>
            </span>
          ) : (
            <span>
              <button>7</button>
            </span>
          )}

          {data == "8" ? (
            <span>
              <button style={{ backgroundColor: "green", color: "white" }}>
                8
              </button>
            </span>
          ) : (
            <span>
              <button>8</button>
            </span>
          )}

          {data == "9" ? (
            <span>
              <button style={{ backgroundColor: "green", color: "white" }}>
                9
              </button>
            </span>
          ) : (
            <span>
              <button>9</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export { Keyboard };
