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

var app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'new data',
    number: '2'
  },
  methods: {
    addToList: function () {
      var i;
      for (i = 0; i < this.number; i++) {
        app5.todos.push({ text: this.message })
      }
    }
  }
})

var createSection = new Vue({
  data: {
    result: ""
  },
  methods: {
    generateFormSection: function(formfields, templateSection, margin, parent) {
      for (fieldname in templateSection) {
        subsection = templateSection[fieldname]
        entry = {'name': fieldname, 'margin': margin}
        switch (typeof subsection) {
          case 'boolean':
            entry.type = 'boolean'
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
              entry.type = 'array'
              formfields.push(entry)
            } else {
              entry.type = 'object'
              formfields.push(entry)
              formfields = createSection.generateFormSection(formfields, subsection, margin + 2, fieldname)
            }
            break;
          default:
            entry.initial = subsection
            entry.type = 'string'
            formfields.push(entry)
            break;
        }

      }
      console.log(formfields)
      return formfields
    }
  }
})

var inputform = new Vue({
  el: '#inputform',
  data: {
    selectedinput: "",
    inputs: [
    ],
    fields: [
    ]
  },
  created: function() {
    for (inputname in template.input) {
      if (inputname != "type") {
        this.inputs.push({ text: inputname })
      }
    }
  },
  watch: {
    selectedinput: function(){
      this.fields = []
      for (fieldname in template.input[this.selectedinput]) {
        prefill = ""
        if (typeof template.input[this.selectedinput][fieldname] == "string") {
          prefill = template.input[this.selectedinput][fieldname]
        }
        //this.fields.push({ text: fieldname, initial: prefill })
      }
      this.fields = createSection.generateFormSection([], template.input[this.selectedinput], 0, "")
    }
  },
  methods: {
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    todos: [
    ]
  },
  methods: {
  }
})

function test() {
        switch (typeof "thisisastring") {
          case 'string':
            console.log( "matched string" )
          case 'boolean':
            console.log( "matched bool" )
          case 'object':
            console.log( "matched object" )
        }
}