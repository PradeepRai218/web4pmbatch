const { colorModel } = require("../../models/color.models");

let createColor = async (req, res) => {
  console.log(req.body);
  let { colorName, colorCode, colorOrder } = req.body;

  let inserObj = {
    colorName,
    colorCode,
    colorOrder,
  };
  try {
    let color = await colorModel.insertOne(inserObj);
    res.send({
      _status: true,
      _message: "Color Created",
      color,
    });
  } catch (err) {
    console.log(err);

    let error = {};
    if (err.code == "11000") {
      error["unique"] = "Color name Alredy Exits";
    }

    console.log(err.errors);

    for (let key in err.errors) {
      error[key] = err.errors[key].message;
      // console.log(key,err.errors[key].message);
    }

    res.send({
      _status: false,
      _message: "Error Found",
      error,
    });
  }
};

let viewColor = async (req, res) => {
  const filter = {
    deletedAt: null,
  };
  //{ colorOrder:{ $gt:2 } }
  //{ colorOrder: { $lt: 3 } }, { colorName: new RegExp("e","i") }
  // {
  //       $and: [
  //         { colorOrder: { $gt: 1 } }, // field1 > 10
  //         {
  //           $or: [
  //             // field2 == "value" OR field3 == true
  //             { colorName: new RegExp("ee","i") },

  //           ],
  //         },
  //       ],
  //     }
  let colorData = await colorModel.find(filter);

  res.send({
    _status: true,
    _message: "Color Found",
    colorData,
  });
};
let deleteColor = async (req, res) => {
  let { id } = req.params;
  let color = await colorModel.updateOne(
    { _id: id },
    {
      $set: {
        isDeleted: true,
        deletedAt: Date.now(),
      },
    }
  );
  res.send({
    _status: true,
    _message: "Color Deleted",
    color,
  });
};

let updateColor = async (req, res) => {
  let { id } = req.params;

  let { colorName, colorCode, colorOrder } = req.body;

  let updateObj = {
    colorName,
    colorCode,
    colorOrder,
  };
  try {
    let color = await colorModel.updateOne( {_id:id},{$set:updateObj} );
    res.send({
      _status: true,
      _message: "Color Updated",
      color,
    });
  } catch (err) {
    console.log(err);

    let error = {};
    if (err.code == "11000") {
      error["unique"] = "Color name Alredy Exits";
    }

    console.log(err.errors);

    for (let key in err.errors) {
      error[key] = err.errors[key].message;
      // console.log(key,err.errors[key].message);
    }

    res.send({
      _status: false,
      _message: "Error Found",
      error,
    });
  }

 
};

let multiDelete = async (req, res) => {
  let { ids } = req.body; //Array ["691da6b8bbb40b8e73447575","691daae2eb66b94bd8e675d0"]
  let color = await colorModel.updateMany(
    { _id: ids },
    {
      $set: {
        isDeleted: true,
        deletedAt: Date.now(),
      },
    }
  );
  res.send({
    _status: true,
    _message: "Color Deleted",
    color,
  });
};

let statusChange = async (req, res) => {
  let { ids } = req.body;
  let color = await colorModel.updateMany({ _id: ids }, [
    {
      $set: {
        colorStatus: {
          $not: "$colorStatus",
        },
      },
    },
  ]);
  res.send({
    _status: true,
    _message: "Color Deleted",
    color,
  });
};

let editData = async (req, res) => {
  let { id } = req.params;
  let colorData = await colorModel.findOne({ _id: id });

  res.send({
    _status: true,
    _message: "Color Found",
    colorData,
  });
};

module.exports = {
  createColor,
  viewColor,
  deleteColor,
  updateColor,
  multiDelete,
  editData,
  statusChange,
};
