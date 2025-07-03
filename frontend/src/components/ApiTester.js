"use strict";
'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = require("@/components/ui/button");
const input_1 = require("@/components/ui/input");
const lucide_react_1 = require("lucide-react");
const react_1 = require("react");
const react_query_1 = require("@tanstack/react-query");
const axios_1 = require("@/lib/axios");
const sonner_1 = require("sonner");
const ApiTester = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        name: '',
        email: ''
    });
    // Fetch data from '/' route
    const { data: apiResponse, isLoading: isLoadingApi, error: apiError } = (0, react_query_1.useQuery)({
        queryKey: ['api-root'],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axios_1.api.get('/');
            return response.data;
        })
    });
    // Create user mutation
    const createUserMutation = (0, react_query_1.useMutation)({
        mutationFn: (userData) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axios_1.api.post('/users', userData);
            return response.data;
        }),
        onSuccess: () => {
            // Reset form
            setFormData({ name: '', email: '' });
            // Show success toast
            sonner_1.toast.success('User created successfully!');
        },
        onError: (error) => {
            console.error('Error creating user:', error);
            // Show error toast
            sonner_1.toast.error('Failed to create user. Please try again.');
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() && formData.email.trim()) {
            createUserMutation.mutate(formData);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => (Object.assign(Object.assign({}, prev), { [name]: value })));
    };
    return (<div className="w-full font-mono max-w-2xl space-y-6 my-10">
      {/* API Response Display */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Backend API (GET /)</h3>
        {isLoadingApi ? (<div className="flex items-center gap-2 text-muted-foreground">
            <lucide_react_1.Loader2 className="h-4 w-4 animate-spin"/>
            Loading...
          </div>) : apiError ? (<div className="text-destructive">
            Error: {apiError instanceof Error ? apiError.message : 'Failed to fetch API'}
          </div>) : (<div className="bg-muted rounded-md p-4">
            <pre className="text-sm text-foreground whitespace-pre-wrap overflow-x-auto">
              {apiResponse === null || apiResponse === void 0 ? void 0 : apiResponse.message}
            </pre>
          </div>)}
      </div>

      {/* User Creation Form */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Database API (POST /users)</h3>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div>
            <input_1.Input name="name" type="text" placeholder="USER" value={formData.name} onChange={handleInputChange} className="w-full" required/>
          </div>
          <div>
            <input_1.Input name="email" type="email" placeholder="EMAIL" value={formData.email} onChange={handleInputChange} className="w-full" required/>
          </div>
          <button_1.Button type="submit" className="w-fit p-2" disabled={createUserMutation.isPending || !formData.name.trim() || !formData.email.trim()}>
            {createUserMutation.isPending ? (<>
                <lucide_react_1.Loader2 className="mr-2 h-4 w-4 animate-spin"/>
              </>) : (<>
                POST
              </>)}
          </button_1.Button>
        </form>
      </div>
    </div>);
};
exports.default = ApiTester;
