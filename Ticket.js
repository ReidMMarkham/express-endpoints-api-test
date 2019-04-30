export class Ticket{
    constructor(id, created_at, updated_at, type, subject, description, priority, status, recipient, submitter, assignee_id, follower_ids, tags){
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.type = type;
        this.subject = subject;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.recipient = recipient;
        this.submitter = submitter;
        this.assignee_id = assignee_id;
        this.follower_ids = follower_ids;
        this.tags = tags;
    }
    
}