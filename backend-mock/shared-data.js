const baseAppStatusData = [
  {
    id: "albyhub",
    version: "1.17.0",
    installed: false,
    configured: false,
    status: "offline",
    local_ip: null,
    http_port: null,
    https_port: null,
    https_forced: null,
    https_self_signed: null,
    hidden_service: null,
    address: null,
    auth_method: null,
    details: null,
    error: null
  },
  {
    id: "btcpayserver",
    version: "v2.2.1",
    installed: false,
    configured: false,
    status: "offline",
    local_ip: null,
    http_port: null,
    https_port: null,
    https_forced: null,
    https_self_signed: null,
    hidden_service: null,
    address: null,
    auth_method: null,
    details: null,
    error: null
  },
  {
    id: "btc-rpc-explorer",
    version: "",
    installed: false,
    configured: false,
    status: "offline",
    local_ip: null,
    http_port: null,
    https_port: null,
    https_forced: null,
    https_self_signed: null,
    hidden_service: null,
    address: null,
    auth_method: null,
    details: null,
    error: null
  },
  {
    id: "electrs",
    version: "v0.10.6",
    installed: true,
    configured: true,
    status: "online",
    local_ip: "127.0.0.1",
    http_port: null,
    https_port: null,
    https_forced: false,
    https_self_signed: false,
    hidden_service: null,
    address: "http://127.0.0.1:None",
    auth_method: "none",
    details: null,
    error: null
  },
  {
    id: "jam",
    version: "0.3.0",
    installed: false,
    configured: false,
    status: "offline",
    local_ip: null,
    http_port: null,
    https_port: null,
    https_forced: null,
    https_self_signed: null,
    hidden_service: null,
    address: null,
    auth_method: null,
    details: null,
    error: null
  },
  {
    id: "lnbits",
    version: "v1.0.0",
    installed: true,
    configured: false,
    status: "online",
    local_ip: "127.0.0.1",
    http_port: "5000",
    https_port: "5001",
    https_forced: true,
    https_self_signed: true,
    hidden_service: "abc.onion",
    address: "https://127.0.0.1:5001",
    auth_method: "/wallet?usr=abcde",
    details: null,
    error: null
  },
  {
    id: "mempool",
    version: "v3.2.1",
    installed: false,
    configured: false,
    status: "offline",
    local_ip: null,
    http_port: null,
    https_port: null,
    https_forced: null,
    https_self_signed: null,
    hidden_service: null,
    address: null,
    auth_method: null,
    details: null,
    error: null
  },
  {
    id: "rtl",
    version: "v0.15.2",
    installed: false,
    configured: false,
    status: "offline",
    local_ip: null,
    http_port: null,
    https_port: null,
    https_forced: null,
    https_self_signed: null,
    hidden_service: null,
    address: null,
    auth_method: null,
    details: null,
    error: null
  },
  {
    id: "thunderhub",
    version: "v0.13.31",
    installed: false,
    configured: false,
    status: "offline",
    local_ip: null,
    http_port: null,
    https_port: null,
    https_forced: null,
    https_self_signed: null,
    hidden_service: null,
    address: null,
    auth_method: null,
    details: null,
    error: null
  }
];

const createAppStateUpdateMessage = (customData = []) => {
  const data = customData.length > 0 ? customData : baseAppStatusData;
  return {
    state: "success",
    message: {
      data,
      errors: [],
      timestamp: Math.floor(Date.now() / 1000)
    }
  };
};

module.exports = { baseAppStatusData, createAppStateUpdateMessage };