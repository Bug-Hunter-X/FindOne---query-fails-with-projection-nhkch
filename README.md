# MongoDB findOne() Query Issue

This repository demonstrates a subtle bug in a MongoDB query using the `findOne()` method with a projection that excludes the `_id` field. The query unexpectedly fails to retrieve the document when the projection is used, even if a matching document exists.

## Problem

The provided JavaScript code attempts to find a user document in the 'users' collection based on the 'name' field.  It uses a projection to exclude the `_id` field from the returned document. However, the query returns null, suggesting that no matching document is found, despite the document existing in the collection.

## Solution

The solution involves modifying the query to explicitly include the `_id` field in the projection (even though it will be omitted from the result if this field is not used anywhere in the program)  or using a different method to retrieve the document.

This ensures that the MongoDB driver correctly identifies and retrieves the document.