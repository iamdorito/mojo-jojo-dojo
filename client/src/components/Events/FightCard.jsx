export default function EventDetailPage({fight}) {
    return(
    <>
        <h3>fight matchup</h3>
        <span>athlete 1: {fight.fighter1.name}</span><br/>
        <span>athlete 2: {fight.fighter2.name}</span>
    </>
    )
}