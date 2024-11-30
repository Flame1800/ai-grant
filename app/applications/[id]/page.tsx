import {ApplicationReview} from "@/components/Applications/Application/ApplicationReview";

export default async function ApplicationPage({ params }) {
    const { id } = await params;

    return <ApplicationReview id={id} />
}
