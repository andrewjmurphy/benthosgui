var template = {
  "http": {
    "address": "0.0.0.0:4195",
    "read_timeout_ms": 5000,
    "root_path": "/benthos",
    "debug_endpoints": false
  },
  "input": {
    "type": "stdin",
    "amqp": {
      "url": "amqp://guest:guest@localhost:5672/",
      "queue": "benthos-queue",
      "queue_declare": {
        "enabled": false,
        "durable": true
      },
      "bindings_declare": [],
      "consumer_tag": "benthos-consumer",
      "prefetch_count": 10,
      "prefetch_size": 0,
      "tls": {
        "enabled": false,
        "root_cas_file": "",
        "skip_cert_verify": false,
        "client_certs": []
      }
    },
    "broker": {
      "copies": 1,
      "inputs": []
    },
    "dynamic": {
      "inputs": {},
      "prefix": "",
      "timeout_ms": 5000
    },
    "file": {
      "path": "",
      "multipart": false,
      "max_buffer": 1000000,
      "delimiter": ""
    },
    "files": {
      "path": ""
    },
    "hdfs": {
      "hosts": [
        "localhost:9000"
      ],
      "user": "benthos_hdfs",
      "directory": ""
    },
    "http_client": {
      "url": "http://localhost:4195/get",
      "verb": "GET",
      "headers": {
        "Content-Type": "application/octet-stream"
      },
      "rate_limit": "",
      "timeout_ms": 5000,
      "retry_period_ms": 1000,
      "max_retry_backoff_ms": 300000,
      "retries": 3,
      "backoff_on": [
        429
      ],
      "drop_on": [],
      "tls": {
        "enabled": false,
        "root_cas_file": "",
        "skip_cert_verify": false,
        "client_certs": []
      },
      "oauth": {
        "enabled": false,
        "consumer_key": "",
        "consumer_secret": "",
        "access_token": "",
        "access_token_secret": "",
        "request_url": ""
      },
      "basic_auth": {
        "enabled": false,
        "username": "",
        "password": ""
      },
      "payload": "",
      "stream": {
        "enabled": false,
        "reconnect": true,
        "multipart": false,
        "max_buffer": 1000000,
        "delimiter": ""
      }
    },
    "http_server": {
      "address": "",
      "path": "/post",
      "ws_path": "/post/ws",
      "timeout_ms": 5000,
      "cert_file": "",
      "key_file": ""
    },
    "inproc": "",
    "kafka": {
      "addresses": [
        "localhost:9092"
      ],
      "client_id": "benthos_kafka_input",
      "consumer_group": "benthos_consumer_group",
      "commit_period_ms": 1000,
      "topic": "benthos_stream",
      "partition": 0,
      "start_from_oldest": true,
      "target_version": "1.0.0",
      "tls": {
        "enabled": false,
        "root_cas_file": "",
        "skip_cert_verify": false,
        "client_certs": []
      }
    },
    "kafka_balanced": {
      "addresses": [
        "localhost:9092"
      ],
      "client_id": "benthos_kafka_input",
      "consumer_group": "benthos_consumer_group",
      "commit_period_ms": 1000,
      "topics": [
        "benthos_stream"
      ],
      "start_from_oldest": true,
      "target_version": "1.0.0",
      "tls": {
        "enabled": false,
        "root_cas_file": "",
        "skip_cert_verify": false,
        "client_certs": []
      }
    },
    "kinesis": {
      "endpoint": "",
      "region": "eu-west-1",
      "credentials": {
        "id": "",
        "secret": "",
        "token": "",
        "role": ""
      },
      "limit": 100,
      "stream": "",
      "shard": "0",
      "dynamodb_table": "",
      "client_id": "benthos_consumer",
      "commit_period_ms": 1000,
      "start_from_oldest": true,
      "timeout_ms": 5000
    },
    "mqtt": {
      "urls": [
        "tcp://localhost:1883"
      ],
      "qos": 1,
      "topics": [
        "benthos_topic"
      ],
      "client_id": "benthos_input"
    },
    "nanomsg": {
      "urls": [
        "tcp://*:5555"
      ],
      "bind": true,
      "socket_type": "PULL",
      "sub_filters": [],
      "poll_timeout_ms": 5000,
      "reply_timeout_ms": 5000
    },
    "nats": {
      "urls": [
        "nats://localhost:4222"
      ],
      "subject": "benthos_messages",
      "queue": "benthos_queue",
      "prefetch_count": 32
    },
    "nats_stream": {
      "urls": [
        "nats://localhost:4222"
      ],
      "cluster_id": "test-cluster",
      "client_id": "benthos_client",
      "queue": "benthos_queue",
      "durable_name": "benthos_offset",
      "start_from_oldest": true,
      "subject": "benthos_messages"
    },
    "nsq": {
      "nsqd_tcp_addresses": [
        "localhost:4150"
      ],
      "lookupd_http_addresses": [
        "localhost:4161"
      ],
      "topic": "benthos_messages",
      "channel": "benthos_stream",
      "user_agent": "benthos_consumer",
      "max_in_flight": 100
    },
    "read_until": {
      "input": {},
      "restart_input": false,
      "condition": {
        "type": "text",
        "and": [],
        "bounds_check": {
          "max_parts": 100,
          "min_parts": 1,
          "max_part_size": 1073741824,
          "min_part_size": 1
        },
        "check_field": {
          "parts": [],
          "path": "",
          "condition": {}
        },
        "count": {
          "arg": 100
        },
        "jmespath": {
          "part": 0,
          "query": ""
        },
        "not": {},
        "metadata": {
          "operator": "equals_cs",
          "part": 0,
          "key": "",
          "arg": ""
        },
        "or": [],
        "resource": "",
        "static": true,
        "text": {
          "operator": "equals_cs",
          "part": 0,
          "arg": ""
        },
        "xor": []
      }
    },
    "redis_list": {
      "url": "tcp://localhost:6379",
      "key": "benthos_list",
      "timeout_ms": 5000
    },
    "redis_pubsub": {
      "url": "tcp://localhost:6379",
      "channels": [
        "benthos_chan"
      ]
    },
    "redis_streams": {
      "url": "tcp://localhost:6379",
      "body_key": "body",
      "streams": [
        "benthos_stream"
      ],
      "consumer_group": "benthos_group",
      "client_id": "benthos_consumer",
      "limit": 10,
      "start_from_oldest": true,
      "commit_period_ms": 1000,
      "timeout_ms": 5000
    },
    "s3": {
      "region": "eu-west-1",
      "bucket": "",
      "prefix": "",
      "retries": 3,
      "delete_objects": false,
      "sqs_url": "",
      "sqs_body_path": "Records.s3.object.key",
      "sqs_envelope_path": "",
      "sqs_max_messages": 10,
      "credentials": {
        "id": "",
        "secret": "",
        "token": "",
        "role": ""
      },
      "timeout_s": 5
    },
    "sqs": {
      "region": "eu-west-1",
      "url": "",
      "credentials": {
        "id": "",
        "secret": "",
        "token": "",
        "role": ""
      },
      "timeout_s": 5
    },
    "stdin": {
      "multipart": false,
      "max_buffer": 1000000,
      "delimiter": ""
    },
    "websocket": {
      "url": "ws://localhost:4195/get/ws",
      "open_message": "",
      "oauth": {
        "enabled": false,
        "consumer_key": "",
        "consumer_secret": "",
        "access_token": "",
        "access_token_secret": "",
        "request_url": ""
      },
      "basic_auth": {
        "enabled": false,
        "username": "",
        "password": ""
      }
    },
    "zmq4": {
      "urls": [
        "tcp://localhost:5555"
      ],
      "bind": false,
      "socket_type": "PULL",
      "sub_filters": [],
      "high_water_mark": 0,
      "poll_timeout_ms": 5000
    },
    "processors": []
  },
  "buffer": {
    "type": "none",
    "memory": {
      "limit": 524288000
    },
    "mmap_file": {
      "directory": "",
      "file_size": 262144000,
      "retry_period_ms": 1000,
      "clean_up": true,
      "reserved_disk_space": 104857600
    },
    "none": {}
  },
  "pipeline": {
    "threads": 1,
    "processors": [
      {
        "type": "bounds_check",
        "archive": {
          "format": "binary",
          "path": "${!count:files}-${!timestamp_unix_nano}.txt"
        },
        "batch": {
          "byte_size": 0,
          "count": 0,
          "condition": {
            "type": "static",
            "and": [],
            "bounds_check": {
              "max_parts": 100,
              "min_parts": 1,
              "max_part_size": 1073741824,
              "min_part_size": 1
            },
            "check_field": {
              "parts": [],
              "path": "",
              "condition": {}
            },
            "count": {
              "arg": 100
            },
            "jmespath": {
              "part": 0,
              "query": ""
            },
            "not": {},
            "metadata": {
              "operator": "equals_cs",
              "part": 0,
              "key": "",
              "arg": ""
            },
            "or": [],
            "resource": "",
            "static": false,
            "text": {
              "operator": "equals_cs",
              "part": 0,
              "arg": ""
            },
            "xor": []
          },
          "period_ms": 0
        },
        "bounds_check": {
          "max_parts": 100,
          "min_parts": 1,
          "max_part_size": 1073741824,
          "min_part_size": 1
        },
        "combine": {
          "parts": 2
        },
        "compress": {
          "algorithm": "gzip",
          "level": -1,
          "parts": []
        },
        "conditional": {
          "condition": {
            "type": "text",
            "and": [],
            "bounds_check": {
              "max_parts": 100,
              "min_parts": 1,
              "max_part_size": 1073741824,
              "min_part_size": 1
            },
            "check_field": {
              "parts": [],
              "path": "",
              "condition": {}
            },
            "count": {
              "arg": 100
            },
            "jmespath": {
              "part": 0,
              "query": ""
            },
            "not": {},
            "metadata": {
              "operator": "equals_cs",
              "part": 0,
              "key": "",
              "arg": ""
            },
            "or": [],
            "resource": "",
            "static": true,
            "text": {
              "operator": "equals_cs",
              "part": 0,
              "arg": ""
            },
            "xor": []
          },
          "processors": [],
          "else_processors": []
        },
        "decode": {
          "scheme": "base64",
          "parts": []
        },
        "decompress": {
          "algorithm": "gzip",
          "parts": []
        },
        "dedupe": {
          "cache": "",
          "hash": "none",
          "parts": [
            0
          ],
          "key": "",
          "drop_on_err": true
        },
        "encode": {
          "scheme": "base64",
          "parts": []
        },
        "filter": {
          "type": "text",
          "and": [],
          "bounds_check": {
            "max_parts": 100,
            "min_parts": 1,
            "max_part_size": 1073741824,
            "min_part_size": 1
          },
          "check_field": {
            "parts": [],
            "path": "",
            "condition": {}
          },
          "count": {
            "arg": 100
          },
          "jmespath": {
            "part": 0,
            "query": ""
          },
          "not": {},
          "metadata": {
            "operator": "equals_cs",
            "part": 0,
            "key": "",
            "arg": ""
          },
          "or": [],
          "resource": "",
          "static": true,
          "text": {
            "operator": "equals_cs",
            "part": 0,
            "arg": ""
          },
          "xor": []
        },
        "filter_parts": {
          "type": "text",
          "and": [],
          "bounds_check": {
            "max_parts": 100,
            "min_parts": 1,
            "max_part_size": 1073741824,
            "min_part_size": 1
          },
          "check_field": {
            "parts": [],
            "path": "",
            "condition": {}
          },
          "count": {
            "arg": 100
          },
          "jmespath": {
            "part": 0,
            "query": ""
          },
          "not": {},
          "metadata": {
            "operator": "equals_cs",
            "part": 0,
            "key": "",
            "arg": ""
          },
          "or": [],
          "resource": "",
          "static": true,
          "text": {
            "operator": "equals_cs",
            "part": 0,
            "arg": ""
          },
          "xor": []
        },
        "grok": {
          "parts": [],
          "patterns": [],
          "remove_empty_values": true,
          "named_captures_only": true,
          "use_default_patterns": true,
          "output_format": "json"
        },
        "hash": {
          "parts": [],
          "algorithm": "sha256"
        },
        "hash_sample": {
          "retain_min": 0,
          "retain_max": 10,
          "parts": [
            0
          ]
        },
        "http": {
          "request": {
            "url": "http://localhost:4195/post",
            "verb": "POST",
            "headers": {
              "Content-Type": "application/octet-stream"
            },
            "rate_limit": "",
            "timeout_ms": 5000,
            "retry_period_ms": 1000,
            "max_retry_backoff_ms": 300000,
            "retries": 3,
            "backoff_on": [
              429
            ],
            "drop_on": [],
            "tls": {
              "enabled": false,
              "root_cas_file": "",
              "skip_cert_verify": false,
              "client_certs": []
            },
            "oauth": {
              "enabled": false,
              "consumer_key": "",
              "consumer_secret": "",
              "access_token": "",
              "access_token_secret": "",
              "request_url": ""
            },
            "basic_auth": {
              "enabled": false,
              "username": "",
              "password": ""
            }
          },
          "parallel": false,
          "max_parallel": 0
        },
        "insert_part": {
          "index": -1,
          "content": ""
        },
        "jmespath": {
          "parts": [],
          "query": ""
        },
        "json": {
          "parts": [],
          "operator": "get",
          "path": "",
          "value": ""
        },
        "merge_json": {
          "parts": [],
          "retain_parts": false
        },
        "metadata": {
          "parts": [],
          "operator": "set",
          "key": "example",
          "value": "${!hostname}"
        },
        "metric": {
          "type": "counter",
          "path": "",
          "labels": {},
          "value": ""
        },
        "process_batch": [],
        "process_field": {
          "parts": [],
          "path": "",
          "processors": []
        },
        "process_map": {
          "parts": [],
          "conditions": [],
          "premap": {},
          "premap_optional": {},
          "postmap": {},
          "postmap_optional": {},
          "processors": []
        },
        "sample": {
          "retain": 10,
          "seed": 0
        },
        "select_parts": {
          "parts": [
            0
          ]
        },
        "split": {
          "size": 1
        },
        "text": {
          "parts": [],
          "operator": "trim_space",
          "arg": "",
          "value": ""
        },
        "throttle": {
          "period": "100us"
        },
        "unarchive": {
          "format": "binary",
          "parts": []
        }
      }
    ]
  },
  "output": {
    "type": "stdout",
    "amqp": {
      "url": "amqp://guest:guest@localhost:5672/",
      "exchange": "benthos-exchange",
      "exchange_declare": {
        "enabled": false,
        "type": "direct",
        "durable": true
      },
      "key": "benthos-key",
      "persistent": false,
      "mandatory": false,
      "immediate": false,
      "tls": {
        "enabled": false,
        "root_cas_file": "",
        "skip_cert_verify": false,
        "client_certs": []
      }
    },
    "broker": {
      "copies": 1,
      "pattern": "fan_out",
      "outputs": []
    },
    "dynamic": {
      "outputs": {},
      "prefix": "",
      "timeout_ms": 5000
    },
    "elasticsearch": {
      "urls": [
        "http://localhost:9200"
      ],
      "id": "${!count:elastic_ids}-${!timestamp_unix}",
      "index": "benthos_index",
      "type": "doc",
      "timeout_ms": 5000,
      "basic_auth": {
        "enabled": false,
        "username": "",
        "password": ""
      }
    },
    "file": {
      "path": "",
      "delimiter": ""
    },
    "files": {
      "path": "${!count:files}-${!timestamp_unix_nano}.txt"
    },
    "hdfs": {
      "hosts": [
        "localhost:9000"
      ],
      "user": "benthos_hdfs",
      "directory": "",
      "path": "${!count:files}-${!timestamp_unix_nano}.txt"
    },
    "http_client": {
      "url": "http://localhost:4195/post",
      "verb": "POST",
      "headers": {
        "Content-Type": "application/octet-stream"
      },
      "rate_limit": "",
      "timeout_ms": 5000,
      "retry_period_ms": 1000,
      "max_retry_backoff_ms": 300000,
      "retries": 3,
      "backoff_on": [
        429
      ],
      "drop_on": [],
      "tls": {
        "enabled": false,
        "root_cas_file": "",
        "skip_cert_verify": false,
        "client_certs": []
      },
      "oauth": {
        "enabled": false,
        "consumer_key": "",
        "consumer_secret": "",
        "access_token": "",
        "access_token_secret": "",
        "request_url": ""
      },
      "basic_auth": {
        "enabled": false,
        "username": "",
        "password": ""
      }
    },
    "http_server": {
      "address": "",
      "path": "/get",
      "stream_path": "/get/stream",
      "ws_path": "/get/ws",
      "timeout_ms": 5000,
      "cert_file": "",
      "key_file": ""
    },
    "inproc": "",
    "kafka": {
      "addresses": [
        "localhost:9092"
      ],
      "client_id": "benthos_kafka_output",
      "key": "",
      "round_robin_partitions": false,
      "topic": "benthos_stream",
      "compression": "none",
      "max_msg_bytes": 1000000,
      "timeout_ms": 5000,
      "ack_replicas": false,
      "target_version": "1.0.0",
      "tls": {
        "enabled": false,
        "root_cas_file": "",
        "skip_cert_verify": false,
        "client_certs": []
      }
    },
    "kinesis": {
      "endpoint": "",
      "region": "eu-west-1",
      "stream": "",
      "hash_key": "",
      "partition_key": "",
      "credentials": {
        "id": "",
        "secret": "",
        "token": "",
        "role": ""
      },
      "max_retries": 0,
      "backoff": {
        "initial_interval": "1s",
        "max_interval": "5s",
        "max_elapsed_time": "30s"
      }
    },
    "mqtt": {
      "urls": [
        "tcp://localhost:1883"
      ],
      "qos": 1,
      "topic": "benthos_topic",
      "client_id": "benthos_output"
    },
    "nanomsg": {
      "urls": [
        "tcp://localhost:5556"
      ],
      "bind": false,
      "socket_type": "PUSH",
      "poll_timeout_ms": 5000
    },
    "nats": {
      "urls": [
        "nats://localhost:4222"
      ],
      "subject": "benthos_messages"
    },
    "nats_stream": {
      "urls": [
        "nats://localhost:4222"
      ],
      "cluster_id": "test-cluster",
      "client_id": "benthos_client",
      "subject": "benthos_messages"
    },
    "nsq": {
      "nsqd_tcp_address": "localhost:4150",
      "topic": "benthos_messages",
      "user_agent": "benthos_producer"
    },
    "redis_list": {
      "url": "tcp://localhost:6379",
      "key": "benthos_list"
    },
    "redis_pubsub": {
      "url": "tcp://localhost:6379",
      "channel": "benthos_chan"
    },
    "redis_streams": {
      "url": "tcp://localhost:6379",
      "stream": "benthos_stream",
      "body_key": "body",
      "max_length": 0
    },
    "retry": {
      "output": {},
      "max_retries": 0,
      "backoff": {
        "initial_interval": "500ms",
        "max_interval": "3s",
        "max_elapsed_time": "0s"
      }
    },
    "s3": {
      "region": "eu-west-1",
      "bucket": "",
      "path": "${!count:files}-${!timestamp_unix_nano}.txt",
      "credentials": {
        "id": "",
        "secret": "",
        "token": "",
        "role": ""
      },
      "timeout_s": 5
    },
    "sqs": {
      "region": "eu-west-1",
      "url": "",
      "credentials": {
        "id": "",
        "secret": "",
        "token": "",
        "role": ""
      }
    },
    "stdout": {
      "delimiter": ""
    },
    "switch": {
      "outputs": []
    },
    "websocket": {
      "url": "ws://localhost:4195/post/ws",
      "oauth": {
        "enabled": false,
        "consumer_key": "",
        "consumer_secret": "",
        "access_token": "",
        "access_token_secret": "",
        "request_url": ""
      },
      "basic_auth": {
        "enabled": false,
        "username": "",
        "password": ""
      }
    },
    "zmq4": {
      "urls": [
        "tcp://*:5556"
      ],
      "bind": true,
      "socket_type": "PUSH",
      "high_water_mark": 0,
      "poll_timeout_ms": 5000
    },
    "processors": []
  },
  "resources": {
    "caches": {
      "example": {
        "type": "memory",
        "dynamodb": {
          "consistent_read": false,
          "credentials": {
            "id": "",
            "secret": "",
            "token": "",
            "role": ""
          },
          "data_key": "",
          "endpoint": "",
          "hash_key": "",
          "region": "",
          "table": "",
          "ttl": "",
          "ttl_key": ""
        },
        "memcached": {
          "addresses": [
            "localhost:11211"
          ],
          "prefix": "",
          "ttl": 300,
          "retries": 3,
          "retry_period_ms": 500
        },
        "memory": {
          "ttl": 300,
          "compaction_interval_s": 60
        }
      }
    },
    "conditions": {
      "example": {
        "type": "text",
        "and": [],
        "bounds_check": {
          "max_parts": 100,
          "min_parts": 1,
          "max_part_size": 1073741824,
          "min_part_size": 1
        },
        "check_field": {
          "parts": [],
          "path": "",
          "condition": {}
        },
        "count": {
          "arg": 100
        },
        "jmespath": {
          "part": 0,
          "query": ""
        },
        "not": {},
        "metadata": {
          "operator": "equals_cs",
          "part": 0,
          "key": "",
          "arg": ""
        },
        "or": [],
        "resource": "",
        "static": true,
        "text": {
          "operator": "equals_cs",
          "part": 0,
          "arg": ""
        },
        "xor": []
      }
    },
    "rate_limit": {
      "example": {
        "type": "local",
        "local": {
          "count": 1000,
          "interval": "1s"
        }
      }
    }
  },
  "logger": {
    "prefix": "benthos",
    "level": "INFO",
    "add_timestamp": true,
    "json_format": true
  },
  "metrics": {
    "type": "http_server",
    "prefix": "benthos",
    "http_server": {},
    "prometheus": {},
    "statsd": {
      "address": "localhost:4040",
      "flush_period": "100ms",
      "network": "udp"
    }
  },
  "sys_exit_timeout_ms": 20000
}

var createSection = new Vue({
  data: {
    result: ""
  },
  methods: {
    generateFormSection: function(formfields, templateSection, margin, parent) {
      for (fieldname in templateSection) {
        subsection = templateSection[fieldname]
        uniqid = parent + fieldname
        entry = {'name': fieldname, 'margin': margin, 'parent': parent, 'uniqid': uniqid}
        switch (typeof subsection) {
          case 'boolean':
            entry.type = 'boolean'
            entry.initial = subsection
            formfields.push(entry)
            break;
          case 'number':
            entry.initial = subsection
            entry.type = 'number'
            formfields.push(entry)
            break;
          case 'object':
            subobjects = []
            if (Array.isArray(subsection)) {
              if (fieldname == 'inputs') {
                // this is a special case, treat it as such
                console.log("inputs array detected")
              }
              entry.type = 'array'
              entry.elements = []
              for (key in subsection) {
                entry.elements[key] = {"index": key, "initial": subsection[key]}
              }
              formfields.push(entry)
            } else {
              entry.type = 'object'
              entry.initial = '_parent'
              formfields.push(entry)
              formfields = createSection.generateFormSection(formfields, subsection, margin + 2, uniqid + ".")
            }
            break;
          default:
            entry.initial = subsection
            entry.type = 'string'
            formfields.push(entry)
            break;
        }

      }
      return formfields
    },
    generateConfig: function (outputData) {
      result = {}
      for (path in outputData) {
        result = createSection.addPathToOutput(result, path, outputData[path])
      }
      return result
    },
    addPathToOutput: function(result, path, data) {
      if (path.includes(".")) {
        seperator = path.indexOf('.')
        parent = path.substring(0,seperator)
        child = path.substring(seperator+1)
        parentobj = {}
        if (parent in result) {
          parentobj = result[parent]
        }
        result[parent] = createSection.addPathToOutput(parentobj, child, data)
        return result
      } else {
        if (data != '_parent') {
          result[path] = data
        }
        return result
      }
    }
  }
})

Vue.component('form-vue', {
  props: {
    name: {
      default: "input",
      type: String
    },
    nested: {
      default: true,
      type: Boolean
    }
  },
  data: function () {
    return {
      count: 1,
      selectedinput: "",
      output: {},
      configOutput: "",
      inputs: [
      ],
      fields: [
      ]
    }
  },
  created: function() {
    if (this.nested) {
      for (inputname in template[this.name]) {
        if (inputname != "type") {
          this.inputs.push({ text: inputname })
        }
      }
    } else {
      this.fields = createSection.generateFormSection([], template[this.name], 0, this.name + ".")
      this.createOutputObject()
    }
  },
  watch: {
    selectedinput: function(){
      this.output = {}
      this.fields = createSection.generateFormSection([], template[this.name][this.selectedinput], 0, this.name + "." + this.selectedinput + ".")
      this.output[this.name + '.type'] = this.selectedinput
      this.createOutputObject()
    }
  },
  methods: {
    createOutputObject: function () {
      for (field in this.fields) {
        if (this.fields[field].type == 'array') {
          inputArray = this.fields[field].elements
          outputArray = []
          for (key in inputArray) {
            entry = inputArray[key]
            outputArray[entry.index] = entry.initial
          }
          this.output[this.fields[field]['uniqid']] = outputArray
        } else {
          this.output[this.fields[field]['uniqid']] = this.fields[field]['initial']
        }
      }
    },
    generateConfig: function () {
      generatedConfig = createSection.generateConfig(this.output)
      this.configOutput = JSON.stringify(generatedConfig, null, 2)
      this.$emit("updateoutput", {"name": this.name, "output": this.output})
    },
    addArrayEntry: function (parent) {
      newElement = {"index": parent.elements.length, "value": ""}
      parent.elements.push(newElement)
      this.output
      this.generateConfig()
    }
  },
  template: `
<div id=formvue>
  <button class="accordion">{{ name.toUpperCase() }}<i class="more-less glyphicon glyphicon-plus"></i></button>
  <div id="thisform" class="panel">
      <select v-model="selectedinput" v-show="nested">
          <option disabled value="">Select input type</option>
          <option v-for="inputtype in inputs">
              {{ inputtype.text }}
          </option>
      </select>

      <form id=input>
          <div v-for="field in fields">
              <div v-bind:style='"text-indent: " + field.margin + "em;"' v-if="field.type == 'boolean'">
                  {{ field.name }}: <input type="checkbox" v-bind:name="field.uniqid" v-model="output[field.uniqid]">
              </div>
              <div v-bind:style='"text-indent: " + field.margin + "em;"' v-else-if="field.type == 'number'">
                  {{ field.name }}: <input type="number" v-bind:name="field.uniqid" v-model="output[field.uniqid]">
              </div>
              <div v-bind:style='"text-indent: " + field.margin + "em;"' v-else-if="field.type == 'array'">
                  {{ field.name }}:
                  <button @click.prevent="addArrayEntry(field)">Add</button>
                  <div v-for="arrayEntry in field.elements"
                       v-bind:style='"text-indent: " + (field.margin + 2) + "em;"'>
                      <input type="text" v-bind:name="field.uniqid + '.' + arrayEntry.index" v-model="output[field.uniqid][arrayEntry.index]">
                  </div>
              </div>
              <div v-bind:style='"text-indent: " + field.margin + "em;"' v-else-if="field.type == 'object'">
                  {{ field.name }}:
              </div>
              <div v-bind:style='"text-indent: " + field.margin + "em;"' v-else>
                  {{ field.name }}: <input type="text" v-bind:name="field.uniqid" v-model="output[field.uniqid]">
              </div>
          </div>
          <button @click.prevent="generateConfig">Generate</button>
      </form>

      <pre>
        <code>
{{ configOutput }}
        </code>
      </pre>
  </div>
</div>
`
})


var vueForms = new Vue({
  el: '#vueforms',
  data: {
    allOutputs: {}
  },
  methods: {
    updateOutput: function (outputObject) {
      this.allOutputs[outputObject.name] = outputObject.output
    },
    mergeObjects: function (obj, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
      }
      return obj;
    },
    getAllOutput: function () {
      finalOutput = {}
      for (key in this.allOutputs) {
        finalOutput = this.mergeObjects(finalOutput, this.allOutputs[key])
      }
      return createSection.generateConfig(finalOutput)
    }
  }
})

// register modal component
Vue.component('modal', {
    template: '#modal-template'
})

// start app
new Vue({
    el: '#generate-config',
    data: {
        showModal: false,
        config: JSON.stringify(vueForms.getAllOutput(), null, 2)
    },
    methods: {
      showConfig: function () {
        this.config = JSON.stringify(vueForms.getAllOutput(), null, 2)
        this.showModal = true
      }
    }
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
     to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
