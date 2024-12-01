import {ApplicationReview} from "@/components/Applications/ApplicationReview/ApplicationReview";

export default async function ApplicationPage({ params }) {
    const { id } = await params;

    return <ApplicationReview id={id} />
}
