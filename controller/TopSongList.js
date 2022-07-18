const Song = require("../models/Songs");

const getSongList = async () => {
  const aggregateRes = await Song.aggregate([
    {
      $unwind: {
        path: "$Singers",
      },
    },
    {
      $group: {
        _id: "$Singers",
        avg: { $avg: "$avg_rating" },
      },
    },
    {
      $lookup: {
        from: "artist",
        localfield: "_id",
        foreignfield: "_id",
        as: "singer",
      },
    },
    { $sort: { avg: -1 } },
    { $limit: 10 },
  ]);
  console.log(aggregateRes);
};

module.exports = getSongList;
