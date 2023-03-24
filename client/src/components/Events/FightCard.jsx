export default function EventDetailPage({fight}) {
    return(
    <>
        <h3>fight matchup</h3>
        <span>athlete 1: {fight.fighter1.first_name} {fight.fighter1.last_name}</span><br/>
        <span>athlete 2: {fight.fighter2.first_name} {fight.fighter2.last_name}</span>
    </>
    )
}