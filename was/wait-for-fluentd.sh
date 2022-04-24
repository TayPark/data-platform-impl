#!/bin/sh

set -e
  
host=$1
port=$2
shift
  
until ! nc $host $port; do
  >&2 echo "fluentd is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "fluentd is up - executing command"
exec "$@"