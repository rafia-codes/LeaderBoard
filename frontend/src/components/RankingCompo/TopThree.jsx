import Card from "./Card";

function TopThreeRankers({ users }) {
  return (
    <div className="flex justify-center gap-8 mt-6 mb-11">
      <Card user={users[2]} index={2}/>
      <Card user={users[0]} index={0}/>
      <Card user={users[1]} index={1}/>
    </div>
  );
}

export default TopThreeRankers;
