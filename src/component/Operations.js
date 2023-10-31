export const Operations =
  (group, apiTickets, orderType) => async (dispatch) => {
    try {
      dispatch({ type: "INITIALIZATION" });

      let user = false;
      let arr = [];
      let finalData = [];

      if (group === "status") {
        arr = ["Todo", "In progress", "Backlog"];

        arr.forEach((e, idx) => {
          let arr = apiTickets.filter((data) => {
            return e === data.status;
          });
          finalData.push({
            [idx]: {
              title: e,
              value: arr,
            },
          });
        });

        // finalData.map((groupData, idx) => {
        //     const title = groupData[idx].title;
        //     const value = groupData[idx].value;

        //     console.log(`Group ${idx}:`);
        //     console.log(`Title: ${title}`);
        //     console.log('Value:');
        //     value.forEach((item, itemidx) => {
        //       console.log(`  Item ${itemidx}:`);
        //       console.log(`  Title: ${item.title}`);
        //       console.log(`  Other properties:`, item);
        //     });
        //   });
      } else if (group === "priority") {
        let priority_type = ["No priority", "Low", "Medium", "High", "Urgent"];

        priority_type.forEach((e, idx) => {
          arr = apiTickets.filter((data) => {
            return idx === data.priority;
          });

          finalData.push({
            [idx]: {
              title: e,
              value: arr,
            },
          });
        });
      } else {
        user = true;
        apiTickets?.allUser?.forEach((e, idx) => {
          arr = apiTickets?.apiTickets?.filter((data) => {
            return e.id === data.userId;
          });
          finalData.push({
            [idx]: {
              title: e.name,
              value: arr,
            },
          });
        });
      }

      if (orderType === "title") {
        finalData.forEach((e, idx) => {
          e[idx]?.value?.sort((a, b) => a.title.localeCompare(b.title));
        });
      }

      if (orderType === "priority") {
        finalData.forEach((e, idx) => {
          e[idx]?.value?.sort((a, b) => b.priority - a.priority);
        });
      }

      dispatch({ type: "SUCCESS", payload: { finalData, user } });
    } catch (error) {
      dispatch({ type: "FAILURE", payload: error.message });
    }
  };
