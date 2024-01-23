const mapDBToModel = ({
    id,
    title,
    body,
    tags,
    created_at,
    updated_at,
    username,
}) => ({
    id,
    title,
    body,
    tags,
    createdAT: created_at,
    updatedAT: updated_at,
    username,
});

module.exports = { mapDBToModel };
