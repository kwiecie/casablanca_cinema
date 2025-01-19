import Link from "next/link";

export default function EventPage() {
    return (
        <main>
            <h1>Event</h1>
            <p><Link href="/events/event-1">Night Cinema</Link></p>
            <p><Link href="/events/event-2">Horror Night</Link></p>
            <p></p>
        </main>
    )
}