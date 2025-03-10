import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const integrations = [
  { name: "AMO CRM", connected: true },
  { name: "Google Календарь", connected: true },
  { name: "Google Почта", connected: false },
  { name: "Google Диск", connected: true },
  { name: "OpenAI API Key", connected: false },
  { name: "Yandex.Cloud", connected: false },
];

export default function IntegrationsView() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Интеграции</h1>
      <div className="grid gap-4">
        {integrations.map((integration) => (
          <Card key={integration.name}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{integration.name}</CardTitle>
              <Switch checked={integration.connected} />
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-gray-600">
                {integration.connected ? (
                  <span className="flex items-center text-green-600">
                    <Check className="mr-1 h-4 w-4" /> Подключено
                  </span>
                ) : (
                  <span className="flex items-center text-red-600">
                    <X className="mr-1 h-4 w-4" /> Не подключено
                  </span>
                )}
              </span>
              <Button variant={integration.connected ? "destructive" : "default"}>
                {integration.connected ? "Отключить" : "Подключить"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
