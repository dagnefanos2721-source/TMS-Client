import { Temporal } from "@js-temporal/polyfill";

export interface Course {
readonly id: string;
title: string;
capacity: number;
startDate?: Temporal.PlainDate;
}

export type CourseStatus =
| { status: "DRAFT"; createdBy: string; createdAt: Temporal.Instant }
| { status: "PUBLISHED"; publishedAt: Temporal.Instant; syllabus: string }
| {
status: "ACTIVE";
enrolledCount: number;
startDate: Temporal.PlainDate;
}
| {
status: "ARCHIVED";
archivedAt: Temporal.Instant;
finalEnrollmentCount: number;
}
| { status: "CANCELLED"; reason: string; cancelledAt: Temporal.Instant };

export function describeCourse(status: CourseStatus): string {
    switch(status.status){
       case "DRAFT" :
        return `created since ${status.createdAt}`;
    case "ACTIVE":
        return `Active with ${status.startDate}`;
    case "ARCHIVED":
        return `archivedAt ${status.archivedAt}`;
    case "CANCELLED":
        return `cancelled ${ status.reason}`;
    case "PUBLISHED":
        return `puplished ${ status.publishedAt}`;
 default: {
const _check: never = status;
throw new Error(`Unhandled status: ${JSON.stringify(_check)}`);
}
    }
// Your switch goes here. Handle all 5 states.
// Each case should return a descriptive string using the state-specific fields.
// Include the default/never check.
}